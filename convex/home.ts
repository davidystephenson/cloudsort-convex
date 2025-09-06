import { query } from './_generated/server'
import relateLists from '../src/list/relateLists'
import getAuth from '../src/auth/getAuth'
import { overAll } from 'overpromise'
import guardRelatedUser from '../src/user/guardRelatedUser'

const home = query({
  handler: async (ctx) => {
    const auth = await getAuth({ ctx })
    if (auth == null) {
      const lists = await ctx.db.query('lists').withIndex('public', (q) => {
        return q.eq('public', true)
      }).collect()
      const related = await relateLists({ ctx, lists, authId: undefined })
      return { lists: related }
    }
    const followeds = await ctx.db.query('follows').withIndex('follower', (q) => {
      return q.eq('followerId', auth._id)
    }).collect()
    const followers = await ctx.db.query('follows').withIndex('followed', (q) => {
      return q.eq('followedId', auth._id)
    }).collect()
    const publicLists = await ctx.db.query('lists').withIndex('public', (q) => {
      return q.eq('public', true)
    }).collect()
    const filteredPublicLists = publicLists.filter((list) => list.userId !== auth._id)
    const relatedPublicLists = await relateLists({
      ctx, lists: filteredPublicLists, authId: auth._id
    })
    const privateUserLists = await ctx.db.query('lists').withIndex('user', (q) => {
      return q.eq('userId', auth._id)
    }).collect()
    const relatedPrivateUserLists = await relateLists({
      ctx, lists: privateUserLists, authId: auth._id
    })
    const followedUsers = await overAll(followeds, async (followed) => {
      const user = await guardRelatedUser({
        ctx,
        userId: followed.followedId,
        authId: auth._id
      })
      return user
    })
    const followerUsers = await overAll(followers, async (follower) => {
      const user = await guardRelatedUser({
        ctx,
        userId: follower.followerId,
        authId: auth._id
      })
      return user
    })
    return {
      auth,
      followeds: followedUsers,
      followers: followerUsers,
      publicLists: relatedPublicLists,
      privateUserLists: relatedPrivateUserLists
    }
  }
})
export default home
