import { getAuthUserId } from '@convex-dev/auth/server'
import { mutation, MutationCtx, query, QueryCtx } from './_generated/server'
import { Doc } from './_generated/dataModel'
import { ConvexError, v } from 'convex/values'
import { guardCurrentUserId } from './users'

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
    const userId = await guardCurrentUserId({ ctx })
    const existing = await getListByName({ ctx, name: args.name })
    if (existing != null) {
      throw new ConvexError('List already exists')
    }
    await ctx.db.insert('lists', {
      name: args.name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      userId
    })
  }
})

export const getByUser = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId == null) {
      throw new Error('Unauthorized')
    }
    const userLists = await ctx.db
      .query('lists')
      .withIndex('user', (q) => q.eq('userId', userId))
      .collect()
    return userLists
  }
})
