import { Password } from '@convex-dev/auth/providers/Password'
import { convexAuth } from '@convex-dev/auth/server'
import { api } from './_generated/api'

const authHub = convexAuth({
  providers: [Password],
  callbacks: {
    async createOrUpdateUser (ctx, args) {
      if (args.existingUserId != null) {
        return args.existingUserId
      }
      if (!('name' in args.profile)) {
        throw new Error('Missing name')
      }
      if (typeof args.profile.name !== 'string') {
        throw new Error('Invalid name')
      }
      const existingUser = await ctx.runQuery(api.getUserByName.default, {
        name: args.profile.name
      })
      if (existingUser != null) {
        throw new Error('Username taken')
      }
      return await ctx.db.insert('users', {
        createdAt: Date.now(),
        name: args.profile.name,
        email: args.profile.email
      })
    }
  }
})
export const {
  signIn,
  signOut,
  store
} = authHub
export default authHub
