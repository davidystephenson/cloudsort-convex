import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'

const hidesContext = contextCreator({
  name: 'Hides',
  useValue: (props: { hides: Array<Doc<'hides'>> }) => {
    return props.hides
  }
})
export default hidesContext
