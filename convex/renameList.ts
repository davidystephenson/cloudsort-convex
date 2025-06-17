import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'
import guardAuthId from './feature/auth/guardAuthId'

export const m = mutation({
  args: {
    listId: v.id('lists'),
    name: v.string()
  },
  handler: async (ctx, args) => {
    if (args.name.length === 0) {
      throw new ConvexError('Name is empty')
    }
    const userId = await guardAuthId({ ctx })
    const list = await ctx.db.get(args.listId)
    if (list == null || list.userId !== userId) {
      throw new ConvexError('List not found')
    }
    await ctx.db.patch(args.listId, {
      name: args.name
    })
  }
})
