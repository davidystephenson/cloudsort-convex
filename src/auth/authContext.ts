import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const authContext = queryContext({
  name: 'auth',
  query: api.getAuth.default
})

export default authContext
