import { query } from './_generated/server'
import guardAuthId from '../src/auth/guardAuthId'

export const q = query({
  handler: async (ctx) => {
    const userId = await guardAuthId({ ctx })
    const userLists = await ctx.db
      .query('lists')
      .withIndex('user', (q) => q.eq('userId', userId))
      .collect()
    return userLists
  }
})
