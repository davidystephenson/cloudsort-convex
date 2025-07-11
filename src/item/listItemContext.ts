import contextCreator from 'context-creator'
import { RelatedListItem } from './itemTypes'

const listItemContext = contextCreator({
  name: 'List Item',
  useValue: (props: { listItem: RelatedListItem }) => props.listItem
})
export default listItemContext
