import { query } from './_generated/server'
import { ConvexError, v } from 'convex/values'
import guard from '../src/arched/guard'
import getAuthId from '../src/auth/getAuthId'
import { Doc } from './_generated/dataModel'
import relateList from '../src/list/relateList'
import { RelatedList } from '../src/list/listTypes'

const getUserLists = query({
  args: {
    userId: v.id('users')
  },
  handler: async (ctx, args) => {
    let user: Doc<'users'>
    let lists: RelatedList[]
    try {
      user = await guard({ ctx, id: args.userId })
      const docs = await ctx
        .db
        .query('lists')
        .withIndex('userPublic', (q) => q.eq('userId', args.userId).eq('public', true))
        .collect()
      if (docs.length === 0) {
        throw new Error()
      }
      const listPromises = docs.map(async (doc) => {
        const list = await relateList({ ctx, list: doc })
        return list
      })
      lists = await Promise.all(listPromises)
    } catch (error) {
      throw new ConvexError('User not found')
    }
    const followers = await ctx
      .db
      .query('follows')
      .withIndex('followed', (q) => q.eq('followedId', args.userId))
      .collect()
    const followerPromises = followers.map(async (f) => {
      const follower = await guard({ ctx, id: f.followerId })
      return {
        _id: follower._id,
        name: follower.name
      }
    })
    const followerUsers = await Promise.all(followerPromises)
    const followeds = await ctx
      .db
      .query('follows')
      .withIndex('follower', (q) => q.eq('followerId', args.userId))
      .collect()
    const followedPromises = followeds.map(async (f) => {
      const followed = await guard({ ctx, id: f.followedId })
      return {
        _id: followed._id,
        name: followed.name
      }
    })
    const followedUsers = await Promise.all(followedPromises)
    const _public = {
      user: {
        _id: user._id,
        name: user.name
      },
      lists,
      followers: followerUsers,
      followeds: followedUsers
    }
    const auth = await getAuthId({ ctx })
    if (auth == null) {
      const userLists = {
        ..._public,
        follower: false,
        followed: false
      }
      return userLists
    }
    const follower = followers.some((f) => f.followerId === auth)
    const followed = followeds.some((f) => f.followedId === auth)
    const userLists = {
      ..._public,
      follower,
      followed
    }
    return userLists
  }
})
export default getUserLists
