import { Flow, getChoice, getRanking } from 'choice-sort'
import { overAll } from 'overpromise'
import updateOperationList from '../operation/updateOperationList'
import { MutationCtx } from '../../convex/_generated/server'
import { Doc, Id } from '../../convex/_generated/dataModel'

export default async function (props: {
  ctx: MutationCtx
  flow: Flow
  listId: Id<'lists'>
  listItems: Array<Doc<'listItems'>>
}): Promise<void> {
  const ranking = getRanking({ flow: props.flow })
  await overAll(ranking, async (item) => {
    const existingListItem = props
      .listItems
      .find((listItem) => listItem.itemUid === item.uid)
    if (existingListItem == null) {
      return await props.ctx.db.insert('listItems', {
        listId: props.listId,
        itemUid: item.uid,
        rank: item.rank,
        seed: item.seed
      })
    }
    if (existingListItem.rank === item.rank) {
      return
    }
    await props.ctx.db.patch(existingListItem._id, {
      rank: item.rank
    })
  })
  const removedListItems = props.listItems.filter((listItem) => {
    const removed = ranking.every((item) => item.uid !== listItem.itemUid)
    return removed
  })
  await overAll(removedListItems, async (listItem) => {
    await props.ctx.db.delete(listItem._id)
  })
  const choice = getChoice({ flow: props.flow })
  if (choice == null) {
    await props.ctx.db.patch(props.listId, {
      a: undefined,
      b: undefined,
      flowCount: props.flow.count
    })
  } else {
    const catalogA = Math.random() > 0.5
    const a = catalogA ? choice.catalog : choice.queue
    const b = catalogA ? choice.queue : choice.catalog
    await props.ctx.db.patch(props.listId, { a, b, flowCount: props.flow.count })
  }
  const existingOperations = await props.ctx.db
    .query('operations')
    .withIndex('listId', (q) => q.eq('listId', props.listId))
    .collect()
  const operations = Object.values(props.flow.operations)
  const removedOperations = existingOperations.filter((existingOperation) => {
    const removed = operations.every(
      operation => operation.uid !== existingOperation.uid
    )
    return removed
  })
  await overAll(removedOperations, async (operation) => {
    await props.ctx.db.delete(operation._id)
  })
  const newOperations = operations.filter((operation) => {
    const _new = existingOperations.every(
      (existingOperation) => existingOperation.uid !== operation.uid
    )
    return _new
  })
  await overAll(newOperations, async (operation) => {
    await props.ctx.db.insert('operations', {
      better: operation.better,
      listId: props.listId,
      uid: operation.uid
    })
    await overAll(operation.catalog, async (item, index) => {
      await props.ctx.db.insert('catalogs', {
        index,
        itemUid: item,
        operationUid: operation.uid
      })
    })
    await overAll(operation.queue, async (item, index) => {
      await props.ctx.db.insert('queues', {
        index,
        itemUid: item,
        operationUid: operation.uid
      })
    })
    await overAll(operation.output, async (item, index) => {
      await props.ctx.db.insert('outputs', {
        index,
        itemUid: item,
        operationUid: operation.uid
      })
    })
  })
  const updatedOperations = operations.filter((operation) => {
    const existing = existingOperations.some(
      (existingOperation) => existingOperation.uid === operation.uid
    )
    return existing
  })
  await overAll(updatedOperations, async (operation) => {
    const existingOperation = existingOperations.find((existingOperation) => existingOperation.uid === operation.uid)
    if (existingOperation == null) {
      throw new Error(`Operation ${operation.uid} not found`)
    }
    if (operation.better !== existingOperation.better) {
      await props.ctx.db.patch(existingOperation._id, {
        better: operation.better
      })
    }
    await updateOperationList({
      collection: 'catalogs',
      ctx: props.ctx,
      itemUids: operation.catalog,
      operationUid: operation.uid
    })
    await updateOperationList({
      collection: 'queues',
      ctx: props.ctx,
      itemUids: operation.queue,
      operationUid: operation.uid
    })
    await updateOperationList({
      collection: 'outputs',
      ctx: props.ctx,
      itemUids: operation.output,
      operationUid: operation.uid
    })
  })
}
