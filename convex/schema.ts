import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  choices: defineTable({
    createdAt: v.number(),
    listId: v.id('lists'),
    option: v.string()
  })
    .index('listId', ['listId']),
  follows: defineTable({
    createdAt: v.number(),
    followerId: v.id('users'),
    followedId: v.id('users')
  })
    .index('follower', ['followerId'])
    .index('followed', ['followedId'])
    .index('both', ['followerId', 'followedId']),
  imports: defineTable({
    createdAt: v.number(),
    listId: v.id('lists')
  })
    .index('listId', ['listId']),
  importItems: defineTable({
    createdAt: v.number(),
    ignored: v.boolean(),
    itemUid: v.string(),
    importId: v.id('imports'),
    seed: v.optional(v.number())
  })
    .index('itemUid', ['itemUid'])
    .index('importId', ['importId']),
  listItems: defineTable({
    createdAt: v.number(),
    listId: v.id('lists'),
    itemUid: v.string(),
    seed: v.optional(v.number()),
    rank: v.number()
  })
    .index('listId', ['listId'])
    .index('itemUid', ['itemUid']),
  items: defineTable({
    createdAt: v.number(),
    label: v.string(),
    uid: v.string()
  })
    .index('uid', ['uid']),
  lists: defineTable({
    a: v.optional(v.string()),
    createdAt: v.number(),
    name: v.string(),
    public: v.boolean(),
    b: v.optional(v.string()),
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
