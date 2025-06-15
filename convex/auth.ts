import { Password } from '@convex-dev/auth/providers/Password'
import { convexAuth } from '@convex-dev/auth/server'
import { api } from './_generated/api'

const Custom = Password({
  profile (params) {
    if (typeof params.email !== 'string') {
      throw new Error('Missing email')
    }
    if (typeof params.name !== 'string') {
      throw new Error('Missing name')
    }
    const profile = {
      email: params.email,
      name: params.name
    }
    return profile
  }
})
const authHub = convexAuth({
  providers: [Custom],
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
      const existingUser = await ctx.runQuery(api.getUserByName.q, {
        name: args.profile.name
      })
      if (existingUser != null) {
        throw new Error('Username taken')
      }
      return await ctx.db.insert('users', {
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
