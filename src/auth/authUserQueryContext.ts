import contextCreator from 'context-creator'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'

const authUserQueryContext = contextCreator({
  name: 'authUserQuery',
  useValue: () => {
    const result = useArchedQuery({ query: api.users.current, args: {} })
    return result
  }
})

export default authUserQueryContext
