import { Doc } from '../../convex/_generated/dataModel'
import contextCreator from 'context-creator'

const listContext = contextCreator({
  name: 'list',
  useValue: (props: { doc: Doc<'lists'> }) => props.doc
})
export default listContext
