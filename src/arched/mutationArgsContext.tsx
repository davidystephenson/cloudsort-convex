import contextCreator, { ContextCreation } from 'context-creator'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { Actor } from 'use-actor'
import useMutationArgs from './useMutationArgs'

export default function mutationARgsContext <
  Args extends DefaultFunctionArgs,
  Data,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  mutation: Mutation
  name: string
}): ContextCreation<Actor<void, Mutation['_returnType']>, { args: Mutation['_args'] }> {
  const context = contextCreator({
    name: props.name,
    useValue: (providerProps: {
      args: Mutation['_args']
    }) => {
      const mutation = useMutationArgs({
        args: providerProps.args, label: props.name, mutation: props.mutation
      })
      return mutation
    }
  })
  return context
}
