import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  choices: defineTable({
    createdAt: v.number(),
    listId: v.id('lists'),
    itemUid: v.string()
  }),
  imports: defineTable({
    createdAt: v.number(),
    listId: v.id('lists')
  }),
  importItems: defineTable({
    createdAt: v.number(),
    ignored: v.boolean(),
    itemUid: v.string(),
    importId: v.id('imports'),
    seed: v.optional(v.number())
  }),
  follows: defineTable({
    createdAt: v.number(),
    followerId: v.id('users'),
    followedId: v.id('users')
  })
    .index('follower', ['followerId'])
    .index('followed', ['followedId'])
    .index('both', ['followerId', 'followedId']),
  items: defineTable({
    createdAt: v.number(),
    label: v.string(),
    uid: v.string()
  })
    .index('uid', ['uid']),
  lists: defineTable({
    createdAt: v.number(),
    name: v.string(),
    public: v.boolean(),
    userId: v.id('users')
  })
    .index('user', ['userId'])
    .index('name', ['name'])
    .index('public', ['public'])
    .index('userPublic', ['userId', 'public']),
  users: defineTable({
    createdAt: v.number(),
    name: v.string(),
    email: v.string()
  })
    .index('email', ['email'])
    .index('name', ['name'])
})

export default schema
