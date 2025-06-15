import contextCreator, { ContextCreation } from 'context-creator'
import { useQuery } from 'convex/react'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'

export type EmptyObject = Record<string, never>

export default function queryContext<
  Args extends DefaultFunctionArgs,
  Data,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >,
  QueryArgs extends Query['_args']
> (props: {
  query: Query
}): ContextCreation<Query['_returnType'] | undefined, QueryArgs> {
  const context = contextCreator({
    name: 'publicListsQuery',
    useValue: (contextProps: QueryArgs) => {
      return useQuery(props.query, contextProps as unknown as any)
    }
  })

  return context
}
