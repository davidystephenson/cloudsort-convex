import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthList from '../src/list/guardAuthList'

const _delete = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    await ctx.db.delete(args.listId)
  }
})
export default _delete
