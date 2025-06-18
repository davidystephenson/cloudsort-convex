import { query } from './_generated/server'

const q = query({
  handler: async (ctx) => {
    const publicLists = await ctx.db
      .query('lists')
      .withIndex('public', (q) => q.eq('public', true))
      .collect()
    return publicLists
  }
})
export default q
