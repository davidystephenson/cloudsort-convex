import contextCreator, { ContextCreation } from 'context-creator'
import useArchedMutation from './useArchedMutation'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { Actor } from 'use-actor'

export default function mutationContext <
  Args extends DefaultFunctionArgs,
  Data,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  mutation: Mutation
  name: string
}): ContextCreation<Actor<Mutation['_args'], Mutation['_returnType']>, {}> {
  const context = contextCreator({
    name: props.name,
    useValue: () => {
      const mutation = useArchedMutation({ label: props.name, mutation: props.mutation })
      return mutation
    }
  })
  return context
}
