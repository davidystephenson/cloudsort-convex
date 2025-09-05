import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'

const headerContext = contextCreator({
  name: 'header',
  useValue: (props: {
    loading?: boolean
    user?: Doc<'users'>
  }) => {
    return props
  }
})
export default headerContext
