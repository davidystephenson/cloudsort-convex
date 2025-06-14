import contextCreator from 'context-creator'
import { api } from '../../convex/_generated/api'
import { useQuery } from 'convex/react'

const publicListsQueryContext = contextCreator({
  name: 'publicListsQuery',
  useValue: () => {
    const result = useQuery(api.lists.getPublic)
    return result
  }
})

export default publicListsQueryContext
