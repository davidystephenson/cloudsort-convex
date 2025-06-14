import { query } from './_generated/server'
import { v } from 'convex/values'

export const q = query({
  args: {
    listId: v.string()
  },
  handler: async (ctx, args) => {
    const listId = ctx.db.normalizeId('lists', args.listId)
    if (listId == null) {
      return null
    }
    const list = await ctx.db.get(listId)
    if (list == null) {
      return null
    }
    return listId
  }
})
