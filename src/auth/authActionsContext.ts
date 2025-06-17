import contextCreator from 'context-creator'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import useAction from '../action/useAction'
import useSecretary from '../useSecretary/useSecretary'

const authActionsContext = contextCreator({
  name: 'authActions',
  useValue: () => {
    const renameMutation = useMutation(api.renameUser.m)
    const createListMutation = useMutation(api.createList.m)
    const rename = useAction({ action: renameMutation })
    const createList = useAction({ action: createListMutation })
    const value = useSecretary({
      createList,
      rename
    })
    return value
  }
})

export default authActionsContext
