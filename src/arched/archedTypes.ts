import type { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import type { ReactNode } from 'react'
import type { QueryCtx, MutationCtx } from '../../convex/_generated/server'
import type { ContextCreation } from 'context-creator'
import type useQueryWithStatus from './useQueryWithStatus'

export type ArchedResult<
  Data,
  Args extends DefaultFunctionArgs,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >
> = ReturnType<typeof useQueryWithStatus<Query>>

export type Ctx = QueryCtx | MutationCtx

export interface QueryContext<
  Args extends DefaultFunctionArgs,
  Data,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >,
  QueryArgs extends Query['_args']
> {
  Provider: (props: { args: QueryArgs, children: ReactNode }) => ReactNode
  data: ContextCreation<Query['_returnType'], { data: Query['_returnType'] }>
  query: ContextCreation<ArchedResult<Data, Args, Query>, QueryArgs>
}
