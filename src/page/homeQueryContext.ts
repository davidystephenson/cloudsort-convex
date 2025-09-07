import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const homeQueryContext = queryContext({
  name: 'Home Query',
  query: api.home.default
})
export default homeQueryContext
