import { useMutation } from 'convex/react'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { Actor, useActor } from 'use-actor'

export default function useArchedMutation <
  Data,
  Args extends DefaultFunctionArgs,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  label: string
  mutation: Mutation
}): Actor<Mutation['_args'], Mutation['_returnType']> {
  const mutation = useMutation(props.mutation)
  const action = useActor({
    action: mutation as unknown as (args: Mutation['_args']) => Promise<Mutation['_returnType']>,
    label: props.label
  })
  return action
}
