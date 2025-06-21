import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const userListsContext = queryContext({
  name: 'userLists',
  query: api.getUserLists.default
})
export default userListsContext
