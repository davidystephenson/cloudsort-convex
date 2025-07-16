import { ReactNode } from 'react'
import getAuthContext from '../auth/getAuthContext'
import LayoutReeling from '../layout/LayoutReeling'
import UserMenu from './UserMenu'
import userIdContext from './userIdContext'
import userListsContext from './userListsContext'
import userContext from './userContext'

export default function UserPageMenu (): ReactNode {
  const auth = getAuthContext.query.useMaybe()
  const userId = userIdContext.query.use()
  const userLists = userListsContext.query.use()
  if (!auth.provided) {
    return <></>
  }
  if (auth.value.loading || userId.loading || userLists.loading) {
    return <LayoutReeling />
  }
  return (
    <userContext.Provider user={userLists.data.user}>
      <UserMenu />
    </userContext.Provider>
  )
}
