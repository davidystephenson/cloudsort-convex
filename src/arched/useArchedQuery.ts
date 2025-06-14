import { OptionalRestArgsOrSkip, useQuery } from 'convex/react'
import { ArchedResult } from './archedTypes'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'

export function useArchedQuery<
  Data,
  Args extends DefaultFunctionArgs,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >
> (props: {
  args: OptionalRestArgsOrSkip<Query>
  query: Query
}): ArchedResult<Data> {
  const data = useQuery(props.query, props.args)
  const loading = data === undefined
  if (loading) {
    return { data: undefined, loading }
  }
  return { data, loading: false }
}
