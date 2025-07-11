import { api } from '../../convex/_generated/api'
import mutationContext from '../arched/mutationContext'

const importContext = mutationContext({
  name: 'Import',
  mutation: api._import.default
})
export default importContext
