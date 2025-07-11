import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthList from '../src/list/guardAuthList'
import { overAll } from 'overpromise'

const importItems = mutation({
  args: {
    listId: v.id('lists'),
    items: v.array(v.object({
      label: v.string(),
      seed: v.optional(v.number()),
      uid: v.string()
    }))
  },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    const createdAt = Date.now()
    const importId = await ctx.db.insert('imports', {
      createdAt,
      listId: args.listId
    })
    const items = await overAll(args.items, async (item) => {
      const existingItem = await ctx.db.query('items').withIndex('uid', (q) => q.eq('uid', item.uid)).unique()
      if (existingItem == null) {
        await ctx.db.insert('items', {
          ...item,
          createdAt
        })
      }
      await ctx.db.insert('importItems', {
        importId,
        itemUid: item.uid,
        ignored: false,
        createdAt
      })

      return item
    })
    return items
  }
})
export default importItems
