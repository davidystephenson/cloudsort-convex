import { ContextCreation } from 'context-creator'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { ReactNode } from 'react'
import { QueryCtx, MutationCtx } from '../../convex/_generated/server'

interface ArchedLoading {
  data: undefined
  loading: true
}

interface ArchedLoaded<T> {
  data: T
  loading: false
}

export type ArchedResult<T> = ArchedLoading | ArchedLoaded<T>

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
  query: ContextCreation<ArchedResult<Query['_returnType']>, QueryArgs>
}
