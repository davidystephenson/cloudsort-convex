import contextCreator from 'context-creator'
import { useConvexAuth, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useMemo } from 'react'
const authContext = contextCreator({
  name: 'auth',
  useValue: () => {
    const convex = useConvexAuth()
    const user = useQuery(api.users.current)
    const value = useMemo(() => {
      return { convex, user }
    }, [convex, user])
    return value
  }
})

export default authContext
