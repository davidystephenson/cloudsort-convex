import contextCreator from 'context-creator'
import { Item } from 'choice-sort'

const itemContext = contextCreator({
  name: 'Item',
  useValue: (props: { item: Item }) => props.item
})
export default itemContext
