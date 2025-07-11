import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthList from '../src/list/guardAuthList'
import { overAll } from 'overpromise'
import { itemDef } from '../src/item/itemTypes'
import { chooseOption, createFlow, importItems } from 'choice-sort'

const _import = mutation({
  args: {
    listId: v.id('lists'),
    items: v.array(itemDef)
  },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    const createdAt = Date.now()
    const importEpisodeId = await ctx.db.insert('importEpisodes', {
      createdAt,
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
          uid: item.uid,
          createdAt
        })
      }
      const existingListItem = await ctx
        .db
        .query('listItems')
        .withIndex('itemUid', (q) => q.eq('itemUid', item.uid)).unique()
      const ignored = existingListItem != null
      await ctx.db.insert('importItems', {
        createdAt,
        importEpisodeId,
        itemUid: item.uid,
        ignored,
        seed: item.seed
      })
    })
    const choiceDocs = await ctx
      .db
      .query('choiceEpisodes')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const choiceEpisodes = choiceDocs.map((doc) => {
      return {
        ...doc,
        type: 'choice'
      } as const
    })
    const importDocs = await ctx
      .db
      .query('importEpisodes')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const importEpisodes = importDocs.map((doc) => {
      return {
        ...doc,
        type: 'import'
      } as const
    })
    const allEpisodes = [...choiceEpisodes, ...importEpisodes]
    // Earliest to latest
    const sortedEpisodes = allEpisodes.toSorted((a, b) => a.createdAt - b.createdAt)
    let flow = createFlow({ uid: args.listId })
    for (const episode of sortedEpisodes) {
      if (episode.type === 'choice') {
        flow = chooseOption({ flow, option: episode.itemUid })
      } else {
        const importItemDocs = await ctx
          .db
          .query('importItems')
          .withIndex('importEpisodeId', (q) => q.eq('importEpisodeId', episode._id))
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
    flow = importItems({ flow, items: args.items })
    const items = Object.values(flow.items)
    await overAll(items, async (item) => {
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
        createdAt
      })
    })
  }
})
export default _import
