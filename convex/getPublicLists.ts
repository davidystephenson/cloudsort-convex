import getAuthId from '../src/auth/getAuthId'
import relateLists from '../src/list/relateLists'
import { query } from './_generated/server'

const q = query({
  handler: async (ctx) => {
    const publicLists = await ctx.db
      .query('lists')
      .withIndex('public', (q) => q.eq('public', true))
      .collect()
    const authId = await getAuthId({ ctx })
    const related = await relateLists({ ctx, authId, lists: publicLists })
    return related
  }
})
export default q
