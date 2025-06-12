import contextCreator from 'context-creator'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useMemo } from 'react'

const listsContext = contextCreator({
  name: 'lists',
  useValue: () => {
    const _public = useQuery(api.lists.getPublic)
    const user = useQuery(api.lists.getByUser)
    const value = useMemo(() => {
      return { public: _public, user }
    }, [_public, user])
    return value
  }
})

export default listsContext
