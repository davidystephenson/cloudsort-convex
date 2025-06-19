import { api } from '../../convex/_generated/api'
import mutationContext from '../arched/mutationContext'

const renameAuthContext = mutationContext({
  name: 'Change Username',
  mutation: api.renameAuth.default
})
export default renameAuthContext
