import { v } from 'convex/values'
import { query } from './_generated/server'
import getAuthId from '../src/auth/getAuthId'

export const q = query({
  args: {
    listId: v.id('lists')
  },
  handler: async (ctx, args) => {
    const list = await ctx.db.get(args.listId)
    if (list == null) {
      return null
    }
    const authId = await getAuthId({ ctx })
    if (!list.public && list.userId !== authId) {
      return null
    }
    return list
  }
})
