import { api } from '../../convex/_generated/api'
import mutationArgsContext from '../arched/mutationArgsContext'

const followContext = mutationArgsContext({
  mutation: api.follow.default,
  name: 'Follow'
})
export default followContext
