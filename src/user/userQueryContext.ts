import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const userQueryContext = queryContext({
  name: 'User Query',
  query: api.user.default
})
export default userQueryContext
