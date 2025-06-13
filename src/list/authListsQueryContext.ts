import contextCreator from 'context-creator'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'

const authListsQueryContext = contextCreator({
  name: 'authListsQuery',
  useValue: () => {
    const result = useArchedQuery({ query: api.getAuthLists.getAuthLists })
    return result
  }
})

export default authListsQueryContext
