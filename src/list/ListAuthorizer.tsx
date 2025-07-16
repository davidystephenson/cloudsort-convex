import { JSX } from 'react'
import { getListContext } from './getListContext'
import ListConsumer from './ListConsumer'
import authorizeListContext from '../auth/authorizeListContext'
import getAuthContext from '../auth/getAuthContext'

export default function ListAuthorizer (): JSX.Element {
  const getAuth = getAuthContext.data.useMaybe()
  const getList = getListContext.query.useMaybe()
  const authed = getAuth.provided &&
    getList.provided &&
    !getList.value.loading &&
    getList.value.data != null &&
    getAuth.value._id === getList.value.data.userId
  if (authed && getList.value.data != null) {
    return (
      <authorizeListContext.Provider listId={getList.value.data._id}>
        <ListConsumer />
      </authorizeListContext.Provider>
    )
  }
  return <ListConsumer />
}
