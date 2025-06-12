import { query } from './_generated/server'
import getCurrentUserId from './feature/list/guardCurrentUserId'

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getCurrentUserId({ ctx })
    if (userId == null) {
      return null
    }
    return await ctx.db.get(userId)
  }
})
