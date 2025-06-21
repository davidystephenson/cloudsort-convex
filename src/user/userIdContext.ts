import { api } from '../../convex/_generated/api'
import queryContext from '../arched/queryContext'

const userIdContext = queryContext({
  name: 'userId',
  query: api.normalizeUserId.default
})

export default userIdContext
