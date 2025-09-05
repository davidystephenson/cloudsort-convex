import { convexAuth } from '@convex-dev/auth/server'
import { api } from './_generated/api'
// import { Password } from '@convex-dev/auth/providers/Password'
import CustomPassword from './CustomPassword'

const authHub = convexAuth({
  providers: [CustomPassword],
  callbacks: {
    async createOrUpdateUser (ctx, args) {
      if (args.existingUserId != null) {
        return args.existingUserId
      }
      if (!('name' in args.profile)) {
        throw new Error('createOrUpdateUser: Missing name')
      }
      if (typeof args.profile.name !== 'string') {
        throw new Error('createOrUpdateUser: Invalid name')
      }
      if (args.profile.name.length === 0) {
        throw new Error('createOrUpdateUser: Name cannot be empty')
      }
      const existingUser = await ctx.runQuery(api.getUserByName.default, {
        name: args.profile.name
      })
      if (existingUser != null) {
        throw new Error('createOrUpdateUser: Username taken')
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
