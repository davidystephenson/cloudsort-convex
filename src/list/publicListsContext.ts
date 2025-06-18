import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const publicListsContext = queryContext({
  name: 'publicLists',
  query: api.getPublicLists.default
})

export default publicListsContext
