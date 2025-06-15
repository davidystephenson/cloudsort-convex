import contextCreator, { ContextCreation } from 'context-creator'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { useArchedQuery } from './useArchedQuery'
import { ArchedResult } from './archedTypes'
import { ReactNode } from 'react'

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
}): ContextCreation<
  ArchedResult<Query['_returnType']>, QueryArgs
  > {
  const context = contextCreator({
    name: 'publicListsQuery',
    useValue: (contextProps: QueryArgs & { children?: ReactNode }) => {
      const { children, ...rest } = contextProps
      return useArchedQuery({
        args: rest as Args,
        query: props.query
      })
    }
  })

  return context
}
