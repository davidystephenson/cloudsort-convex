import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'

const publicListsContext = contextCreator({
  name: 'publicLists',
  useValue: (props: {
    data: Array<Doc<'lists'>>
  }) => {
    return props.data
  }
})

export default publicListsContext
