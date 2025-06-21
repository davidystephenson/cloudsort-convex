import { ReactNode } from 'react'
import authContext from '../auth/authContext'
import LayoutReeling from '../layout/LayoutReeling'
import UserMenu from './UserMenu'
import userIdContext from './userIdContext'
import userListsContext from './userListsContext'
import userBaseContext from './userBaseContext'

export default function UserPageMenu (): ReactNode {
  const auth = authContext.query.useMaybe()
  const userId = userIdContext.query.use()
  const userLists = userListsContext.query.use()
  if (!auth.provided) {
    return <></>
  }
  if (auth.value.loading || userId.loading || userLists.loading) {
    return <LayoutReeling />
  }
  const follow = userId.data !== auth.value.data._id && !userLists.data.follower
  return (
    <userBaseContext.Provider user={userLists.data.user}>
      <UserMenu
        follow={follow}
        unfollow={userLists.data.followed}
      />
    </userBaseContext.Provider>
  )
}
