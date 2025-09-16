import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthId from '../src/auth/guardAuthId'

const hideItem = mutation({
  args: { itemUid: v.string() },
  handler: async (ctx, args) => {
    const authId = await guardAuthId({ ctx })
    const existing = await ctx.db.query('hides').withIndex('userItem', (q) =>
      q.eq('userId', authId).eq('itemUid', args.itemUid)
    ).first()
    if (existing != null) {
      throw new Error('Item is already hidden')
    }
    await ctx.db.insert('hides', {
      itemUid: args.itemUid,
      userId: authId
    })
  }
})
export default hideItem
