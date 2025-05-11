import { Password } from '@convex-dev/auth/providers/Password'
import { convexAuth } from '@convex-dev/auth/server'

const authHub = convexAuth({
  providers: [Password]
})

export const {
  signIn,
  signOut,
  store
} = authHub

export default authHub
