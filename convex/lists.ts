import { mutation, query } from './_generated/server'
import { v } from 'convex/values'
import guardAuthId from '../src/auth/guardAuthId'
import guardAuthList from '../src/list/guardAuthList'

export const _delete = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    await ctx.db.delete(args.listId)
  }
})

export const getByUser = query({
  handler: async (ctx) => {
    const userId = await guardAuthId({ ctx })
    const userLists = await ctx.db
      .query('lists')
      .withIndex('user', (q) => q.eq('userId', userId))
      .collect()
    return userLists
  }
})

export const getPublic = query({
  handler: async (ctx) => {
    const publicLists = await ctx.db
      .query('lists')
      .withIndex('public', (q) => q.eq('public', true))
      .collect()
    return publicLists
  }
})

export const publish = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    await ctx.db.patch(args.listId, {
      public: true
    })
  }
})

export const unpublish = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardAuthList({ ctx, listId: args.listId })
    await ctx.db.patch(args.listId, {
      public: false
    })
  }
})
