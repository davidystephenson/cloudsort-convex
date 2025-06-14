import contextCreator, { ContextCreation } from 'context-creator'
import { useQuery } from 'convex/react'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'

export type EmptyObject = Record<string, never>

export default function queryContext<
  Args extends DefaultFunctionArgs,
  Data,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >
> (props: {
  query: Query
}): ContextCreation<Data | undefined, Args> {
  const context = contextCreator({
    name: 'publicListsQuery',
    useValue: (contextProps: Query['_args']) => {
      const result = useQuery(props.query, contextProps)
      return result
    }
  })

  return context
}
