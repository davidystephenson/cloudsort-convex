import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'
import guardAuthId from '../src/auth/guardAuthId'

export const m = mutation({
  args: {
    name: v.string()
  },
  handler: async (ctx, args) => {
    if (args.name.length === 0) {
      throw new ConvexError('Name is empty')
    }
    const userId = await guardAuthId({ ctx })
    await ctx.db.patch(userId, {
      name: args.name
    })
  }
})
