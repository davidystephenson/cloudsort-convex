import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthUserList from '../src/list/guardAuthUserList'
import deleteList from '../src/list/deleteList'

const _delete = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardAuthUserList({ ctx, listId: args.listId })
    await deleteList({ ctx, id: args.listId })
  }
})
export default _delete
