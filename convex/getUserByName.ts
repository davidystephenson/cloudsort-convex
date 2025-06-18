import { query } from './_generated/server'
import { v } from 'convex/values'

const getUserByName = query({
  args: {
    name: v.string()
  },
  handler: async (ctx, args) => {
    const user = await ctx
      .db
      .query('users')
      .withIndex('name', (q) => q.eq('name', args.name))
      .first()
    return user
  }
})
export default getUserByName
