import guardAuthId from '../src/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'

const createList = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    if (args.name.length === 0) {
      throw new ConvexError('List has no name')
    }
    const userId = await guardAuthId({ ctx })
    const existing = await ctx
      .db
      .query('lists')
      .withIndex('name', (q) => q.eq('name', args.name))
      .first()
    if (existing != null) {
      throw new ConvexError('List already exists')
    }
    await ctx.db.insert('lists', {
      name: args.name,
      flowCount: 0,
      public: false,
      userId
    })
  }
})
export default createList
