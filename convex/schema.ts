import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  choices: defineTable({
    listId: v.id('lists'),
    aUid: v.string(),
    bUid: v.string(),
    aChosen: v.boolean()
  })
    .index('listId', ['listId']),
  follows: defineTable({
    followerId: v.id('users'),
    followedId: v.id('users')
  })
    .index('follower', ['followerId'])
    .index('followed', ['followedId'])
    .index('both', ['followerId', 'followedId']),
  imports: defineTable({
    listId: v.id('lists')
  })
    .index('listId', ['listId']),
  importItems: defineTable({
    itemUid: v.string(),
    importId: v.id('imports'),
    seed: v.optional(v.number())
  })
    .index('itemUid', ['itemUid'])
    .index('importId', ['importId']),
  listItems: defineTable({
    listId: v.id('lists'),
    itemUid: v.string(),
    seed: v.optional(v.number()),
    rank: v.number()
  })
    .index('listId', ['listId'])
    .index('itemUid', ['itemUid']),
  items: defineTable({
    label: v.string(),
    uid: v.string()
  })
    .index('uid', ['uid']),
  lists: defineTable({
    a: v.optional(v.string()),
    flowCount: v.number(),
    name: v.string(),
    public: v.boolean(),
    b: v.optional(v.string()),
    userId: v.id('users')
  })
    .index('user', ['userId'])
    .index('name', ['name'])
    .index('public', ['public'])
    .index('userPublic', ['userId', 'public']),
  catalogs: defineTable({
    index: v.number(),
    itemUid: v.string(),
    operationUid: v.string()
  })
    .index('index', ['index'])
    .index('operationUid', ['operationUid'])
    .index('operationUidIndex', ['operationUid', 'index']),
  operations: defineTable({
    better: v.optional(v.number()),
    listId: v.id('lists'),
    uid: v.string()
  })
    .index('listId', ['listId']),
  outputs: defineTable({
    index: v.number(),
    itemUid: v.string(),
    operationUid: v.string()
  })
    .index('index', ['index'])
    .index('operationUid', ['operationUid'])
    .index('operationUidIndex', ['operationUid', 'index']),
  queues: defineTable({
    index: v.number(),
    itemUid: v.string(),
    operationUid: v.string()
  })
    .index('operationUid', ['operationUid']),
  users: defineTable({
    admin: v.boolean(),
    name: v.string(),
    email: v.string()
  })
    .index('email', ['email'])
    .index('name', ['name'])
})

export default schema
