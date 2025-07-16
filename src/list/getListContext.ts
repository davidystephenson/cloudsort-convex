import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

export const getListContext = queryContext({
  name: 'list',
  query: api.getList.default
})
