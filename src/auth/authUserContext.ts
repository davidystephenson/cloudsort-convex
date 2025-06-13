import contextCreator from 'context-creator'
import { Doc } from '@convex-dev/auth/server'

const authUserContext = contextCreator({
  name: 'authUser',
  useValue: (props: {
    data: Doc<'users'>
  }) => {
    return props.data
  }
})

export default authUserContext
