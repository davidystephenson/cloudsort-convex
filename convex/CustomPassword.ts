import { Password } from '@convex-dev/auth/providers/Password'
import { DataModel } from './_generated/dataModel'

const CustomPassword = Password<DataModel>({
  profile (params) {
    if (params.email == null) {
      throw new Error('Missing email')
    }
    if (typeof params.email !== 'string') {
      throw new Error('Invalid email')
    }
    if (params.name == null) {
      throw new Error('Missing name')
    }
    if (typeof params.name !== 'string') {
      throw new Error('Invalid name')
    }
    return {
      createdAt: Date.now(),
      email: params.email,
      name: params.name
    }
  }
})
export default CustomPassword
