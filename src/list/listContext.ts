import { Doc } from '../../convex/_generated/dataModel'
import contextCreator from 'context-creator'
import { useMemo } from 'react'

const listContext = contextCreator({
  name: 'list',
  useValue: (props: {
    doc: Doc<'lists'>
  }) => {
    const value = useMemo(() => {
      return {
        doc: props.doc
      }
    }, [props.doc])
    return value
  }
})
export default listContext
