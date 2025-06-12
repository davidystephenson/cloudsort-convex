import contextCreator from 'context-creator'
import { useMemo } from 'react'
import authContext from './authContext'

const authLoadingContext = contextCreator({
  name: 'authLoading',
  useValue: (props: {
    loading: boolean
  }) => {
    const auth = authContext.use()
    const value = useMemo(() => {
      const loading = auth.convex.isLoading || props.loading
      return { loading }
    }, [auth.convex.isLoading, props.loading])
    return value
  }
})

export default authLoadingContext
