import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthList from '../src/list/guardAuthList'
import { overAll } from 'overpromise'
import { itemDef } from '../src/item/itemTypes'
import { chooseOption, createFlow, getChoice, getRanking, importItems } from 'choice-sort'
import updateOperationList from '../src/operation/updateOperationList'

const _import = mutation({
  args: {
    listId: v.id('lists'),
    items: v.array(itemDef)
  },
  handler: async (ctx, args) => {
    const list = await guardAuthList({ ctx, listId: args.listId })
    const importId = await ctx.db.insert('imports', {
      listId: args.listId
    })
    await overAll(args.items, async (item) => {
      const existingItem = await ctx
        .db
        .query('items')
        .withIndex('uid', (q) => q.eq('uid', item.uid)).unique()
      if (existingItem == null) {
        await ctx.db.insert('items', {
          label: item.label,
          uid: item.uid
        })
      }
      const existingListItem = await ctx
        .db
        .query('listItems')
        .withIndex('itemUid', (q) => q.eq('itemUid', item.uid)).unique()
      const ignored = existingListItem != null
      await ctx.db.insert('importItems', {
        importId,
        itemUid: item.uid,
        ignored,
        seed: item.seed
      })
    })
    const choices = await ctx
      .db
      .query('choices')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const choiceEpisodes = choices.map((doc) => {
      return {
        ...doc,
        type: 'choice'
      } as const
    })
    const imports = await ctx
      .db
      .query('imports')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const importEpisodes = imports.map((doc) => {
      return {
        ...doc,
        type: 'import'
      } as const
    })
    const allEpisodes = [...choiceEpisodes, ...importEpisodes]
    const sortedEpisodes = allEpisodes.toSorted((a, b) => a._creationTime - b._creationTime)
    let flow = createFlow({ uid: args.listId })
    for (const episode of sortedEpisodes) {
      if (episode.type === 'choice') {
        flow = chooseOption({ flow, option: episode.option })
      } else {
        const importItemDocs = await ctx
          .db
          .query('importItems')
          .withIndex('importId', (q) => q.eq('importId', episode._id))
          .collect()
        const items = await overAll(importItemDocs, async (doc) => {
          const item = await ctx
            .db
            .query('items')
            .withIndex('uid', (q) => q.eq('uid', doc.itemUid)).unique()
          if (item == null) {
            throw new Error(`Item ${doc.itemUid} not found`)
          }
          return item
        })
        flow = importItems({ flow, items })
      }
    }
    const listItems = await ctx
      .db
      .query('listItems')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const items = await overAll(listItems, async (doc) => {
      const item = await ctx
        .db
        .query('items')
        .withIndex('uid', (q) => q.eq('uid', doc.itemUid)).unique()
      return item
    })
    const operations = await ctx
      .db
      .query('operations')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const relatedOperations = await overAll(operations, async (operation) => {
      const catalogs = await ctx
        .db
        .query('catalogs')
        .withIndex('operationUid', (q) => q.eq('operationUid', operation._id)).collect()
      const outputs = await ctx
        .db
        .query('outputs')
        .withIndex('operationUid', (q) => q.eq('operationUid', operation._id)).collect()
      const queues = await ctx
        .db
        .query('queues')
        .withIndex('operationUid', (q) => q.eq('operationUid', operation._id)).collect()
      return {
        catalogs,
        outputs,
        queues
      }
    })
    flow = importItems({ flow, items })
    const ranking = getRanking({ flow })
    await overAll(ranking, async (item) => {
      const existingListItem = await ctx
        .db
        .query('listItems')
        .withIndex('itemUid', (q) => q.eq('itemUid', item.uid)).unique()
      if (existingListItem != null) {
        return
      }
      await ctx.db.insert('listItems', {
        listId: args.listId,
        itemUid: item.uid,
        rank: item.rank,
        seed: item.seed
      })
    })
    const choice = getChoice({ flow })
    if (choice == null) {
      return await ctx.db.patch(args.listId, {
        a: undefined,
        b: undefined
      })
    }
    const catalogA = Math.random() > 0.5
    const a = catalogA ? choice.catalog : choice.queue
    const b = catalogA ? choice.queue : choice.catalog
    await ctx.db.patch(args.listId, {
      a,
      b
    })
    const existingOperations = await ctx
      .db
      .query('operations')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const operations = Object.values(flow.operations)
    const removedOperations = existingOperations.filter((existingOperation) => {
      const removed = operations.every(operation => operation.uid !== existingOperation.uid)
      return removed
    })
    await overAll(removedOperations, async (operation) => {
      await ctx.db.delete(operation._id)
    })
    const newOperations = operations.filter((operation) => {
      const _new = existingOperations.every((existingOperation) => existingOperation.uid !== operation.uid)
      return _new
    })
    await overAll(newOperations, async (operation) => {
      await ctx.db.insert('operations', {
        better: operation.better,
        listId: args.listId,
        uid: operation.uid
      })
      await overAll(operation.catalog, async (item, index) => {
        await ctx.db.insert('catalogs', {
          index,
          itemUid: item,
          operationUid: operation.uid
        })
      })
      await overAll(operation.queue, async (item, index) => {
        await ctx.db.insert('queues', {
          index,
          itemUid: item,
          operationUid: operation.uid
        })
      })
      await overAll(operation.output, async (item, index) => {
        await ctx.db.insert('outputs', {
          index,
          itemUid: item,
          operationUid: operation.uid
        })
      })
    })
    const updatedOperations = operations.filter((operation) => {
      const existing = existingOperations.some((existingOperation) => existingOperation.uid === operation.uid)
      return existing
    })
    await overAll(updatedOperations, async (operation) => {
      const existingOperation = existingOperations.find((existingOperation) => existingOperation.uid === operation.uid)
      if (existingOperation == null) {
        throw new Error(`Operation ${operation.uid} not found`)
      }
      if (operation.better !== existingOperation.better) {
        await ctx.db.patch(existingOperation._id, {
          better: operation.better
        })
      }
      await updateOperationList({
        collection: 'catalogs',
        ctx,
        itemUids: operation.catalog,
        operationUid: operation.uid
      })
      await updateOperationList({
        collection: 'queues',
        ctx,
        itemUids: operation.queue,
        operationUid: operation.uid
      })
      await updateOperationList({
        collection: 'outputs',
        ctx,
        itemUids: operation.output,
        operationUid: operation.uid
      })
    })
  }
})
export default _import
