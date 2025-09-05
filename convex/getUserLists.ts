import { query } from './_generated/server'
import { v } from 'convex/values'
import getAuthId from '../src/auth/getAuthId'
import guardRelatedUser from '../src/user/guardRelatedUser'
import guardUserBundle from '../src/user/guardUserBundle'

const getUserLists = query({
  args: {
    userId: v.id('users')
  },
  handler: async (ctx, args) => {
    const authId = await getAuthId({ ctx })
    const bundle = await guardUserBundle({ authId, ctx, userId: args.userId })
    const followers = await ctx
      .db
      .query('follows')
      .withIndex('followed', (q) => q.eq('followedId', args.userId))
      .collect()
    const followerPromises = followers.map(async (f) => {
      const user = await guardRelatedUser({
        ctx,
        userId: f.followerId,
        authId
      })
      return user
    })
    const followerUsers = await Promise.all(followerPromises)
    const followeds = await ctx
      .db
      .query('follows')
      .withIndex('follower', (q) => q.eq('followerId', args.userId))
      .collect()
    const followedPromises = followeds.map(async (f) => {
      const user = await guardRelatedUser({
        ctx,
        userId: f.followedId,
        authId
      })
      return user
    })
    const followedUsers = await Promise.all(followedPromises)
    if (authId == null) {
      const userLists = {
        user: {
          ...bundle.user,
          follower: false,
          followed: false
        },
        lists: bundle.lists,
        followers: followerUsers,
        followeds: followedUsers
      }
      return userLists
    }
    const follower = followers.some((f) => f.followerId === authId)
    const followed = followeds.some((f) => f.followedId === authId)
    const userLists = {
      user: {
        ...bundle.user,
        follower,
        followed
      },
      lists: bundle.lists,
      followers: followerUsers,
      followeds: followedUsers
    }
    return userLists
  }
})
export default getUserLists
