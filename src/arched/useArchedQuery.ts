import type { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import useQueryWithStatus from './useQueryWithStatus'
import type { ArchedResult } from './archedTypes'

export function useArchedQuery<
  Data,
  Args extends DefaultFunctionArgs,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >
> (props: {
  args: Query['_args']
  query: Query
}): ArchedResult<Data, Args, Query> {
  const query = useQueryWithStatus(props.query, props.args as any)
  return query
}
