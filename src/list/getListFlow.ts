import { Flow, Item, Operation } from 'choice-sort'
import { Ctx } from '../arched/archedTypes'
import { overAll } from 'overpromise'
import { Doc } from '../../convex/_generated/dataModel'

export default async function getListFlow (props: {
  ctx: Ctx
  list: Doc<'lists'>
  listItems?: Array<Doc<'listItems'>>
}): Promise<Flow> {
  const listItems = props.listItems ?? await props.ctx.db
    .query('listItems')
    .withIndex('listId', (q) => q.eq('listId', props.list._id))
    .collect()
  const flowItems: Record<string, Item> = {}
  await overAll(listItems, async (doc) => {
    const item = await props.ctx.db.query('items')
      .withIndex('uid', (q) => q.eq('uid', doc.itemUid)).unique()
    if (item == null) {
      throw new Error(`Item ${doc.itemUid} not found`)
    }
    flowItems[item.uid] = item
  })
  const flowOperations: Record<string, Operation> = {}
  const operations = await props.ctx
    .db
    .query('operations')
    .withIndex('listId', (q) => q.eq('listId', props.list._id))
    .collect()
  await overAll(operations, async (operation) => {
    const catalogs = await props.ctx
      .db
      .query('catalogs')
      .withIndex('operationUid', (q) => q.eq('operationUid', operation.uid)).collect()
    const outputs = await props.ctx
      .db
      .query('outputs')
      .withIndex('operationUid', (q) => q.eq('operationUid', operation.uid)).collect()
    const queues = await props.ctx
      .db
      .query('queues')
      .withIndex('operationUid', (q) => q.eq('operationUid', operation.uid)).collect()
    const catalog = catalogs.map((catalog) => {
      return catalog.itemUid
    })
    const output = outputs.map((output) => {
      return output.itemUid
    })
    const queue = queues.map((queue) => {
      return queue.itemUid
    })
    const flowOperation: Operation = {
      uid: operation.uid,
      better: operation.better,
      catalog,
      output,
      queue
    }
    flowOperations[operation.uid] = flowOperation
  })
  const flow: Flow = {
    uid: props.list._id,
    count: props.list.flowCount,
    items: flowItems,
    operations: flowOperations
  }
  return flow
}
