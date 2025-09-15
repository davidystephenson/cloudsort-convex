import { query } from './_generated/server'
import { v } from 'convex/values'
import getAuthId from '../src/auth/getAuthId'
import guardRelatedUser from '../src/user/guardRelatedUser'
import { overAll } from 'overpromise'
import relateLists from '../src/list/relateLists'
import getRelatedUser from '../src/user/getRelatedUser'

const user = query({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    const authId = await getAuthId({ ctx })
    const auth = await getRelatedUser({ ctx, userId: authId, authId })
    const userId = ctx.db.normalizeId('users', args.userId)
    if (userId == null) {
      return { auth, user: undefined }
    }
    const user = await ctx.db.get(userId)
    if (user == null) {
      return { auth, user: undefined }
    }
    const userLists = await ctx
      .db
      .query('lists')
      .withIndex('userPublic', (q) => q.eq('userId', userId))
      .collect()
    const followers = await ctx
      .db
      .query('follows')
      .withIndex('followed', (q) => q.eq('followedId', userId))
      .collect()
    const publicLists = userLists.filter((list) => list.public)
    const self = userId === authId
    if (!self && publicLists.length === 0 && followers.length === 0) {
      const followings = await ctx
        .db
        .query('follows')
        .withIndex('follower', (q) => q.eq('followerId', userId))
        .collect()
      if (followings.length === 0) {
        return { auth, user: undefined }
      }
    }
    const lists = self ? userLists : publicLists
    const relatedLists = await relateLists({ ctx, lists, authId })
    const followerUsers = await overAll(followers, async (follower) => {
      const user = await guardRelatedUser({
        ctx,
        userId: follower.followerId,
        authId
      })
      return user
    })
    const followeds = await ctx
      .db
      .query('follows')
      .withIndex('follower', (q) => q.eq('followerId', userId))
      .collect()
    const followedUsers = await overAll(followeds, async (followed) => {
      const user = await guardRelatedUser({
        ctx,
        userId: followed.followedId,
        authId
      })
      return user
    })
    if (authId == null) {
      const relatedUser = { ...user, followed: false, follower: false }
      const userLists = {
        auth,
        followeds: followedUsers,
        followers: followerUsers,
        lists: relatedLists,
        user: relatedUser
      }
      return userLists
    }
    const followed = followeds.some((f) => f.followedId === authId)
    const follower = followers.some((f) => f.followerId === authId)
    const relatedUser = { ...user, followed, follower }
    return {
      auth,
      followeds: followedUsers,
      followers: followerUsers,
      lists: relatedLists,
      user: relatedUser
    }
  }
})
export default user
