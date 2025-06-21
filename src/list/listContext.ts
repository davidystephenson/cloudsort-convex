import contextCreator from 'context-creator'
import { RelatedList } from './listTypes'

const listContext = contextCreator({
  name: 'list',
  useValue: (props: { doc: RelatedList }) => props.doc
})
export default listContext
