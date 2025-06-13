import { useQuery } from 'convex/react'
import { ArchedResult } from './archedTypes'
import { FunctionReference } from 'convex/server'

type EmptyObject = Record<string, never>

export function useArchedQuery<Data> (props: {
  query: FunctionReference<
  'query', 'public', EmptyObject, Data
  >
}): ArchedResult<Data> {
  const data = useQuery(props.query)
  const loading = data === undefined
  if (loading) {
    return { data: undefined, loading }
  }
  return { data, loading: false }
}
