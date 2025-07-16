import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const getAuthContext = queryContext({
  name: 'getAuth',
  query: api.getAuth.default
})

export default getAuthContext
