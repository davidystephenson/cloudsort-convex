import { ConvexError, v } from 'convex/values'
import { mutation } from './_generated/server'
import guardAuthId from '../src/auth/guardAuthId'

const follow = mutation({
  args: {
    userId: v.id('users')
  },
  handler: async (ctx, args) => {
    const authId = await guardAuthId({ ctx })
    if (authId === args.userId) {
      throw new ConvexError('Cannot follow yourself')
    }
    const existing = await ctx.db.query('follows')
      .withIndex('both', q => q.eq('followerId', authId)
        .eq('followedId', args.userId)).first()
    if (existing !== null) {
      throw new ConvexError('Already following')
    }
    await ctx.db.insert('follows', {
      followerId: authId,
      followedId: args.userId
    })
  }
})
export default follow
