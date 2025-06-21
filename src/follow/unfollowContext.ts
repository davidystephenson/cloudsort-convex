import { api } from '../../convex/_generated/api'
import mutationArgsContext from '../arched/mutationArgsContext'

const unfollowContext = mutationArgsContext({
  mutation: api.unfollow.default,
  name: 'Unfollow'
})
export default unfollowContext
