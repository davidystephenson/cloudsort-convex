import contextCreator from 'context-creator'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'

const publicListsQueryContext = contextCreator({
  name: 'publicListsQuery',
  useValue: () => {
    const result = useArchedQuery({ query: api.lists.getPublic })
    return result
  }
})

export default publicListsQueryContext
