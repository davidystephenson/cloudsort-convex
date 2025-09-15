import { makeUseQueryWithStatus } from 'convex-helpers/react'
import { useQueries } from 'convex/react'

const useQueryWithStatus = makeUseQueryWithStatus(useQueries)
export default useQueryWithStatus
