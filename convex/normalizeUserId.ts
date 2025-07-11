import getAuthId from '../src/auth/getAuthId'
import guardUserBundle from '../src/user/guardUserBundle'
import { query } from './_generated/server'
import { v } from 'convex/values'

const normalizeUserId = query({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    const authId = await getAuthId({ ctx })
    const userId = ctx.db.normalizeId('users', args.userId)
    if (userId == null) {
      return null
    }
    await guardUserBundle({ authId, ctx, userId })
    return userId
  }
})
export default normalizeUserId
