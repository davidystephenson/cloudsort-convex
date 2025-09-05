import { Password } from '@convex-dev/auth/providers/Password'
import { DataModel } from './_generated/dataModel'

const CustomPassword = Password<DataModel>({
  profile (params) {
    console.log('CustomPassword profile', params)
    if (params.email == null) {
      throw new Error('CustomPassword: Missing email')
    }
    if (typeof params.email !== 'string') {
      throw new Error('CustomPassword: Invalid email')
    }
    if (params.name != null && typeof params.name !== 'string') {
      throw new Error('CustomPassword: Invalid name')
    }
    return {
      email: params.email,
      name: params.name ?? ''
    }
  }
})
export default CustomPassword
