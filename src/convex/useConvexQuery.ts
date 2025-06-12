import { useQuery } from 'convex/react'
import { ConvexQuery } from './convexTypes'
import { FunctionReference } from 'convex/server'

type EmptyObject = Record<string, never>

export function useConvexQuery<Output> (props: {
  query: FunctionReference<
  'query', 'public', EmptyObject, Output, string | undefined
  >
}): ConvexQuery<Output> {
  const data = useQuery(props.query)
  const loading = data === undefined
  if (loading) {
    return { data: undefined, loading }
  }
  return { data, loading: false }
}
