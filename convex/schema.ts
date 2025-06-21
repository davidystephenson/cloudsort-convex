import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  follows: defineTable({
    createdAt: v.number(),
    followerId: v.id('users'),
    followedId: v.id('users')
  })
    .index('follower', ['followerId'])
    .index('followed', ['followedId'])
    .index('both', ['followerId', 'followedId']),
  lists: defineTable({
    createdAt: v.number(),
    name: v.string(),
    public: v.boolean(),
    userId: v.id('users')
  })
    .index('user', ['userId'])
    .index('name', ['name'])
    .index('public', ['public']),
  users: defineTable({
    name: v.string(),
    email: v.string()
  })
    .index('email', ['email'])
    .index('name', ['name'])
})

export default schema
