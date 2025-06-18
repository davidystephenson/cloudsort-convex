import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

export const listIdContext = queryContext({
  name: 'listId',
  query: api.normalizeListId.default
})
