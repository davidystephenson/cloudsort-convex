import contextCreator from 'context-creator'
import { useMemo } from 'react'
import { Doc } from '@convex-dev/auth/server'

const authUserContext = contextCreator({
  name: 'authUser',
  useValue: (props: {
    doc: Doc<'users'>
  }) => {
    const value = useMemo(() => {
      return { doc: props.doc }
    }, [props.doc])
    return value
  }
})

export default authUserContext
