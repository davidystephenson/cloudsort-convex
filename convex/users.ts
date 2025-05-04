import { getAuthUserId } from '@convex-dev/auth/server'
import { query, QueryCtx } from './_generated/server'
import { Id } from './_generated/dataModel'

export async function getCurrentUserId (props: {
  ctx: QueryCtx
}): Promise<Id<'users'> | undefined> {
  const userId = await getAuthUserId(props.ctx)
  if (userId == null) {
    return undefined
  }
  return userId
}

export async function guardCurrentUserId (props: {
  ctx: QueryCtx
}): Promise<Id<'users'>> {
  const userId = await getCurrentUserId(props)
  if (userId == null) {
    throw new Error('Unauthorized')
  }
  return userId
}

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await guardCurrentUserId({ ctx })
    return await ctx.db.get(userId)
  }
})
