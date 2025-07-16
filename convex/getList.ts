import { v } from 'convex/values'
import { query } from './_generated/server'
import getRelatedList from '../src/list/getRelatedList'

const getList = query({
  args: {
    listId: v.id('lists')
  },
  handler: async (ctx, args) => {
    const related = await getRelatedList({ ctx, listId: args.listId })
    return related
  }
})
export default getList
