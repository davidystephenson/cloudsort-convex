import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const publicListsQueryContext = queryContext({
  name: 'publicListsQuery',
  query: api.lists.getPublic
})

export default publicListsQueryContext
