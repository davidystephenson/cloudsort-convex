import { useMutation } from 'convex/react'
import useAction from '../action/useAction'
import { Action } from '../action/actionTypes'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'

export default function useArchedMutation <
  Data,
  Args extends DefaultFunctionArgs,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  mutation: Mutation
}): Action<Mutation['_args'], Mutation['_returnType']> {
  const mutation = useMutation(props.mutation)
  const action = useAction({
    action: mutation as unknown as (args: Mutation['_args']) => Promise<Mutation['_returnType']>
  })
  return action
}
