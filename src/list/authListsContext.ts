import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'

const authListsContext = contextCreator({
  name: 'authLists',
  useValue: (props: {
    data: Array<Doc<'lists'>>
  }) => {
    return props.data
  }
})

export default authListsContext
