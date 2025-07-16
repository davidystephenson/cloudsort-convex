import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const authorizeListContext = queryContext({
  name: 'authorizelist',
  query: api.authorizeList.default
})

export default authorizeListContext
