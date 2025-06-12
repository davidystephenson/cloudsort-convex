import { Doc } from '../../convex/_generated/dataModel'
import contextCreator from 'context-creator'
import { useMemo } from 'react'
import { api } from '../../convex/_generated/api'
import useListMutation from './useListMutation'

const listContext = contextCreator({
  name: 'list',
  useValue: (props: {
    doc: Doc<'lists'>
  }) => {
    const _delete = useListMutation({
      listId: props.doc._id,
      mutation: api.lists._delete
    })
    const publish = useListMutation({
      listId: props.doc._id,
      mutation: api.lists.publish
    })
    const unpublish = useListMutation({
      listId: props.doc._id,
      mutation: api.lists.unpublish
    })
    const value = useMemo(() => {
      return {
        doc: props.doc,
        delete: _delete,
        publish,
        unpublish
      }
    }, [_delete, props.doc, publish, unpublish])
    return value
  }
})
export default listContext
