import { query } from './_generated/server'
import guardAuthId from '../src/auth/guardAuthId'

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await guardAuthId({ ctx })
    const user = await ctx.db.get(userId)
    if (user == null) {
      throw new Error('User not found')
    }
    return user
  }
})
