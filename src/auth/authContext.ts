import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'

const authContext = contextCreator({
  name: 'Auth',
  useValue: (props: { user: Doc<'users'> }) => {
    return props.user
  }
})
export default authContext
