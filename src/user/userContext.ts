import contextCreator from 'context-creator'
import { RelatedUser } from './userTypes'

const userContext = contextCreator({
  name: 'user',
  useValue: (props: {
    user: RelatedUser
  }) => {
    return props.user
  }
})

export default userContext
