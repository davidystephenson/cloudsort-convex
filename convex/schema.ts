import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  lists: defineTable({
    createdAt: v.number(),
    name: v.string(),
    public: v.boolean(),
    userId: v.id('users')
  })
    .index('user', ['userId'])
    .index('name', ['name'])
    .index('public', ['public'])
})

export default schema
