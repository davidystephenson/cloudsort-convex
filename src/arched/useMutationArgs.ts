import { useMutation } from 'convex/react'
import { DefaultFunctionArgs, FunctionReference, OptionalRestArgs } from 'convex/server'
import { useCallback } from 'react'
import { Actor, useActor } from 'use-actor'

export default function useMutationArgs <
  Data,
  Args extends DefaultFunctionArgs,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  args: Mutation['_args']
  label: string
  mutation: Mutation
}): Actor<void, Mutation['_returnType']> {
  const mutation = useMutation(props.mutation)
  const action = useCallback(async () => {
    return await mutation(...([props.args] as unknown as OptionalRestArgs<Mutation>))
  }, [mutation, props.args])
  const actor = useActor({
    action,
    label: props.label
  })
  return actor
}
