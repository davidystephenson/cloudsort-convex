import contextCreator from 'context-creator'
import { Id } from '../../convex/_generated/dataModel'

export const listIdContext = contextCreator({
  name: 'listId',
  useValue: (props: { listId: Id<'lists'> }) => {
    return props.listId
  }
})
