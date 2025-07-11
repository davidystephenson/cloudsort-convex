import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  choiceEpisodes: defineTable({
    createdAt: v.number(),
    listId: v.id('lists'),
    itemUid: v.string()
  })
    .index('listId', ['listId']),
  importEpisodes: defineTable({
    createdAt: v.number(),
    listId: v.id('lists')
  })
    .index('listId', ['listId']),
  importItems: defineTable({
    createdAt: v.number(),
    ignored: v.boolean(),
    itemUid: v.string(),
    importEpisodeId: v.id('importEpisodes'),
    seed: v.optional(v.number())
  })
    .index('itemUid', ['itemUid'])
    .index('importEpisodeId', ['importEpisodeId']),
  listItems: defineTable({
    createdAt: v.number(),
    listId: v.id('lists'),
    itemUid: v.string()
  })
    .index('listId', ['listId'])
    .index('itemUid', ['itemUid']),
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
