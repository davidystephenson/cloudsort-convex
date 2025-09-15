import { convexAuth } from '@convex-dev/auth/server'
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
      const users = await ctx.db.query('users').collect()
      const existingUser = users.find(user => user.name === name)
      if (existingUser != null) {
        throw new Error('Username taken')
      }
      const admin = users.length === 0
      return await ctx.db.insert('users', {
        admin,
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
