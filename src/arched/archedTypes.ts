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

type Override<Base, K extends PropertyKey, V> =
  Base extends Record<string, never>
    ? Record<K, V>
    : { [P in keyof Base as P extends K ? never : P]: Base[P] } & Record<K, V>

export interface QueryContext<
  Args extends DefaultFunctionArgs,
  Data,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >,
  QueryArgs extends Query['_args']
> {
  Provider: (props: Override<QueryArgs, 'children', ReactNode>) => ReactNode
  data: ContextCreation<Query['_returnType'], { data: Query['_returnType'] }>
  query: ContextCreation<ArchedResult<Query['_returnType']>, QueryArgs>
}
