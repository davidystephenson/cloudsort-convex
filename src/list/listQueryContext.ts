import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

export const listQueryContext = queryContext({
  query: api.getList.q
})
