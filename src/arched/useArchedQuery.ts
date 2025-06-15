import { useQuery } from 'convex/react'
import { ArchedResult } from './archedTypes'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'

export function useArchedQuery<
  Data,
  Args extends DefaultFunctionArgs,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >
> (props: {
  args: Query['_args']
  query: Query
}): ArchedResult<Query['_returnType']> {
  const data = useQuery(props.query, props.args as any)
  const loading = data === undefined
  if (loading) {
    return { data: undefined, loading }
  }
  return { data, loading: false }
}
