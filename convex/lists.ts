import { mutation, MutationCtx, query, QueryCtx } from './_generated/server'
import { Doc } from './_generated/dataModel'
import { ConvexError, v } from 'convex/values'
import guardAuthId from './feature/auth/guardAuthId'
import guardCurrentUserList from './feature/list/guardAuthList'

export async function getListByName (props: {
  ctx: QueryCtx | MutationCtx
  name: string
}): Promise<Doc<'lists'> | null> {
  const list = await props
    .ctx
    .db
    .query('lists')
    .withIndex('name', (q) => q.eq('name', props.name))
    .first()
  if (list == null) {
    return null
  }
  return list
}

export const create = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    if (args.name.length === 0) {
      throw new ConvexError('List has no name')
    }
    const userId = await guardAuthId({ ctx })
    const existing = await getListByName({ ctx, name: args.name })
    if (existing != null) {
      throw new ConvexError('List already exists')
    }
    await ctx.db.insert('lists', {
      name: args.name,
      createdAt: Date.now(),
      public: false,
      userId
    })
  }
})

export const _delete = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardCurrentUserList({ ctx, listId: args.listId })
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
    await guardCurrentUserList({ ctx, listId: args.listId })
    await ctx.db.patch(args.listId, {
      public: true
    })
  }
})

export const unpublish = mutation({
  args: { listId: v.id('lists') },
  handler: async (ctx, args) => {
    await guardCurrentUserList({ ctx, listId: args.listId })
    await ctx.db.patch(args.listId, {
      public: false
    })
  }
})
