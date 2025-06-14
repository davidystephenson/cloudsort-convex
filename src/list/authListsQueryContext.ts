import contextCreator from 'context-creator'
import { api } from '../../convex/_generated/api'
import { useQuery } from 'convex/react'

const authListsQueryContext = contextCreator({
  name: 'authListsQuery',
  useValue: () => {
    const result = useQuery(api.getAuthLists.q)
    return result
  }
})

export default authListsQueryContext
