import contextCreator, { ContextCreation } from 'context-creator'
import useArchedMutation from './useArchedMutation'
import { Action } from '../action/actionTypes'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'

export default function mutationContext <
  Args extends DefaultFunctionArgs,
  Data,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  mutation: Mutation
  name: string
}): ContextCreation<Action<Mutation['_args'], Mutation['_returnType']>, {}> {
  const context = contextCreator({
    name: props.name,
    useValue: () => {
      const mutation = useArchedMutation({ mutation: props.mutation })
      return mutation
    }
  })
  return context
}
