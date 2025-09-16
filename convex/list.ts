import { query } from './_generated/server'
import { v } from 'convex/values'
import getAuthId from '../src/auth/getAuthId'
import getRelatedUser from '../src/user/getRelatedUser'
import { AuthList } from '../src/list/listTypes'
import getEpisodes from '../src/episode/getEpisodes'
import relateList from '../src/list/relateList'

const list = query({
  args: {
    listId: v.string()
  },
  handler: async (ctx, args) => {
    const authId = await getAuthId({ ctx })
    const auth = await getRelatedUser({ ctx, userId: authId, authId })
    const empty = { auth, list: undefined }
    const listId = ctx.db.normalizeId('lists', args.listId)
    if (listId == null) {
      return empty
    }
    const list = await ctx.db.get(listId)
    if (list == null) {
      return empty
    }
    const self = authId === list.userId
    if (!list.public && !self) {
      console.log('not public and not self')
      return empty
    }
    const hides = await ctx.db.query('hides').withIndex('userItem',
      (q) => q.eq('userId', list.userId)
    ).collect()
    const relatedList = await relateList({
      authId,
      ctx,
      hides: self ? undefined : hides,
      list
    })
    if (auth == null || !self) {
      const ranks = [...new Set(relatedList.listItems.map((li) => li.rank))]
      const collapsedItems = relatedList.listItems.map((listItem) => {
        const newRank = ranks.indexOf(listItem.rank) + 1
        return { ...listItem, rank: newRank }
      })
      const collapsedList = { ...relatedList, listItems: collapsedItems }
      return { auth, list: collapsedList }
    }
    const episodes = await getEpisodes({ ctx, listId })
    const authList: AuthList = {
      ...relatedList,
      ...episodes
    }
    const result = { auth, list: authList, hides }
    return result
  }
})
export default list
