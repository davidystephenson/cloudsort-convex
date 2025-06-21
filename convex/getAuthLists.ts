import { query } from './_generated/server'
import guardAuthId from '../src/auth/guardAuthId'
import relateLists from '../src/list/relateLists'

const getAuthLists = query({
  handler: async (ctx) => {
    const authId = await guardAuthId({ ctx })
    const lists = await ctx.db
      .query('lists')
      .withIndex('user', (q) => q.eq('userId', authId))
      .collect()
    const related = await relateLists({ ctx, authId, lists })
    return related
  }
})
export default getAuthLists
