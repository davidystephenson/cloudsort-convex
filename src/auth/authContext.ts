import contextCreator from 'context-creator'
import { useConvexAuth } from 'convex/react'
import { useMemo } from 'react'

const authContext = contextCreator({
  name: 'auth',
  useValue: () => {
    const convex = useConvexAuth()
    const value = useMemo(() => {
      return { convex }
    }, [convex])
    return value
  }
})

export default authContext
