import contextCreator from 'context-creator'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

const authContext = contextCreator({
  name: 'auth',
  useValue: () => {
    const user = useQuery(api.users.current)
    return { user }
  }
})

export default authContext
