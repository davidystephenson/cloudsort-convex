import contextCreator from 'context-creator'
import { api } from '../../convex/_generated/api'
import useSecretary from '../useSecretary/useSecretary'
import useArchedMutation from '../arched/useArchedMutation'

const authActionsContext = contextCreator({
  name: 'authActions',
  useValue: () => {
    const createList = useArchedMutation({ mutation: api.createList.default })
    const value = useSecretary({ createList })
    return value
  }
})

export default authActionsContext
