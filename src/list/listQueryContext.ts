import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const listQueryContext = queryContext({
  name: 'List Query',
  query: api.list.default
})
export default listQueryContext
