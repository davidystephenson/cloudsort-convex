import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.string(),
    email: v.string()
  })
    .index('email', ['email'])
    .index('name', ['name']),
  lists: defineTable({
    createdAt: v.number(),
    name: v.string(),
    public: v.boolean(),
    userId: v.id('users'),
    userName: v.string()
  })
    .index('user', ['userId'])
    .index('name', ['name'])
    .index('public', ['public'])
})

export default schema
