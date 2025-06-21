import { query } from './_generated/server'
import { v } from 'convex/values'

const normalizeUserId = query({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    const userId = ctx.db.normalizeId('users', args.userId)
    if (userId == null) {
      return null
    }
    const user = await ctx.db.get(userId)
    if (user == null) {
      return null
    }
    const lists = await ctx
      .db
      .query('lists')
      .withIndex('userPublic', (q) => q.eq('userId', userId).eq('public', true))
      .collect()
    if (lists.length === 0) {
      return null
    }
    return userId
  }
})
export default normalizeUserId
