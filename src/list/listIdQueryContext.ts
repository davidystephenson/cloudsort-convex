import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

export const listIdQueryContext = queryContext({
  name: 'List ID query',
  query: api.normalizeListId.default
})
