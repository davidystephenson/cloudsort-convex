import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthUserList from '../src/list/guardAuthUserList'

const publishList = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardAuthUserList({ ctx, listId: args.listId })
    await ctx.db.patch(args.listId, {
      public: true
    })
  }
})
export default publishList
