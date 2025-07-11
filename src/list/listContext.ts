import contextCreator from 'context-creator'
import { RelatedList } from './listTypes'

const listContext = contextCreator({
  name: 'list',
  useValue: (props: { list: RelatedList }) => props.list
})
export default listContext
