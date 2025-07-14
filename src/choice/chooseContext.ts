import { api } from '../../convex/_generated/api'
import mutationArgsContext from '../arched/mutationArgsContext'

const chooseContext = mutationArgsContext({
  name: 'Choose',
  mutation: api.choose.default
})
export default chooseContext
