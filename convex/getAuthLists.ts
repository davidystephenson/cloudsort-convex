import { query } from './_generated/server'
import guardAuthId from '../src/auth/guardAuthId'

const getAuthLists = query({
  handler: async (ctx) => {
    const userId = await guardAuthId({ ctx })
    const userLists = await ctx.db
      .query('lists')
      .withIndex('user', (q) => q.eq('userId', userId))
      .collect()
    return userLists
  }
})
export default getAuthLists
