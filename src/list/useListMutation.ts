import { useMutation } from 'convex/react'
import { useCallback } from 'react'
import { Id } from '../../convex/_generated/dataModel'
import { FunctionReference } from 'convex/server'

export default function useListMutation (props: {
  listId: Id<'lists'>
  mutation: FunctionReference<'mutation', 'public', { listId: Id<'lists'> }, any>
}): () => Promise<void> {
  const mutation = useMutation(props.mutation)
  const callback = useCallback(async () => {
    await mutation({ listId: props.listId })
  }, [mutation, props.listId])
  return callback
}
