import contextCreator from 'context-creator'
import { Id } from '../../convex/_generated/dataModel'

const userIdContext = contextCreator({
  name: 'userId',
  useValue: (props: {
    userId: Id<'users'>
  }) => {
    return props.userId
  }
})

export default userIdContext
