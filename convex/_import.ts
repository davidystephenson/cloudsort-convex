import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthList from '../src/list/guardAuthList'
import { overAll } from 'overpromise'
import { itemDef } from '../src/item/itemTypes'
import { createFlow } from 'choice-sort'

const _import = mutation({
  args: {
    listId: v.id('lists'),
    items: v.array(itemDef)
  },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    const createdAt = Date.now()
    const importId = await ctx.db.insert('imports', {
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
        importId,
        itemUid: item.uid,
        ignored,
        seed: item.seed
      })
    })
    const flow = createFlow({ uid: args.listId })
  }
})
export default _import
