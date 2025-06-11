import { Doc } from '../../convex/_generated/dataModel'
import contextCreator from 'context-creator'
import { useMutation } from 'convex/react'
import { useCallback, useMemo } from 'react'
import { api } from '../../convex/_generated/api'

const listContext = contextCreator({
  name: 'list',
  useValue: (props: {
    doc: Doc<'lists'>
  }) => {
    const _delete = useMutation(api.lists._delete)
    const deleteList = useCallback(async () => {
      await _delete({ id: props.doc._id })
    }, [_delete, props.doc._id])
    const value = useMemo(() => {
      return {
        doc: props.doc,
        delete: deleteList
      }
    }, [deleteList, props.doc])

    return value
  }
})
export default listContext
