import { ReactNode } from 'react'
import authContext from '../auth/authContext'
import LayoutReeling from '../layout/LayoutReeling'
import UserMenu from './UserMenu'
import listContext from '../list/listContext'
import userIdContext from './userIdContext'

export default function UserPageMenu (): ReactNode {
  const auth = authContext.query.useMaybe()
  const list = listContext.use()

  if (!auth.provided) {
    return <></>
  }
  if (auth.value.loading) {
    return <LayoutReeling />
  }
  console.log('list', list)
  const follow = list.userId !== auth.value.data._id && !list.userFollowed
  return (
    <userIdContext.Provider userId={list.userId}>
      <UserMenu
        follow={follow}
        unfollow={list.userFollowed}
      />
    </userIdContext.Provider>
  )
}
