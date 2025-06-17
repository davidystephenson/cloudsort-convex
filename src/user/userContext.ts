import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'

const userContext = contextCreator({
  name: 'user',
  useValue: (props: {
    doc: Doc<'users'>
  }) => {
    return props.doc
  }
})

export default userContext
