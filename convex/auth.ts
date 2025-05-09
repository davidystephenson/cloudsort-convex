import { Password } from '@convex-dev/auth/providers/Password'
import { convexAuth } from '@convex-dev/auth/server'

const authHub = convexAuth({
  providers: [Password]
})
export default authHub
