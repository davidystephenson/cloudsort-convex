import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

export const listIdQueryContext = queryContext({
  query: api.normalizeListId.q
})
