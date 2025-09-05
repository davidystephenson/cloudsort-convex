import { ConvexError, v } from 'convex/values'
import { mutation } from './_generated/server'
import guardAuthId from '../src/auth/guardAuthId'

const unfollow = mutation({
  args: {
    userId: v.id('users')
  },
  handler: async (ctx, args) => {
    const authId = await guardAuthId({ ctx })
    const existing = await ctx.db.query('follows')
      .withIndex('both', q => q.eq('followerId', authId).eq('followedId', args.userId))
      .first()
    if (existing === null) {
      throw new ConvexError('Not following')
    }
    await ctx.db.delete(existing._id)
  }
})
export default unfollow
