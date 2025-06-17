import contextCreator from 'context-creator'
import { Doc } from '../../convex/_generated/dataModel'
import { useMemo } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import useAction from '../action/useAction'

const authUserContext = contextCreator({
  name: 'authUser',
  useValue: (props: {
    data: Doc<'users'>
  }) => {
    const renameUser = useMutation(api.renameUser.m)
    const rename = useAction({ action: renameUser })
    const value = useMemo(() => {
      return {
        data: props.data,
        rename
      }
    }, [props.data, rename])
    return value
  }
})

export default authUserContext
