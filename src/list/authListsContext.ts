import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const authListsContext = queryContext({
  name: 'authlists',
  query: api.getAuthLists.default
})

export default authListsContext
