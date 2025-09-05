import { query } from './_generated/server'
import getUser from '../src/user/getUser'
import relateLists from '../src/list/relateLists'

const home = query({
  handler: async (ctx) => {
    const user = await getUser({ ctx })
    if (user == null) {
      const lists = await ctx.db.query('lists').withIndex('public', (q) => {
        return q.eq('public', true)
      }).collect()
      const related = await relateLists({ ctx, lists, authId: undefined })
      return { lists: related }
    }
    const followeds = await ctx.db.query('follows').withIndex('follower', (q) => {
      return q.eq('followerId', user._id)
    }).collect()
    const followers = await ctx.db.query('follows').withIndex('followed', (q) => {
      return q.eq('followedId', user._id)
    }).collect()
    const publicLists = await ctx.db.query('lists').withIndex('public', (q) => {
      return q.eq('public', true)
    }).collect()
    const filteredPublicLists = publicLists.filter((list) => list.userId !== user._id)
    const relatedPublicLists = await relateLists({
      ctx, lists: filteredPublicLists, authId: user._id
    })
    const privateUserLists = await ctx.db.query('lists').withIndex('user', (q) => {
      return q.eq('userId', user._id)
    }).collect()
    const relatedPrivateUserLists = await relateLists({
      ctx, lists: privateUserLists, authId: user._id
    })
    return {
      followeds,
      followers,
      publicLists: relatedPublicLists,
      privateUserLists: relatedPrivateUserLists,
      user
    }
  }
})
export default home
