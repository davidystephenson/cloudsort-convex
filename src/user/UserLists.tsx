import { ReactNode } from 'react'
import LayoutLoading from '../layout/LayoutLoading'
import UserListsTable from '../list/UserListsTable'
import userIdContext from './userIdContext'
import userListsContext from './userListsContext'
import UserSection from './UserSection'
import UserHeading from './UserHeading'

export default function UserLists (): ReactNode {
  const userId = userIdContext.query.use()
  const userLists = userListsContext.query.useMaybe()
  if (userId.loading || !userLists.provided || userLists.value.loading) {
    return <LayoutLoading />
  }
  return (
    <>
      <UserHeading />
      <UserListsTable docs={userLists.value.data.lists} />
      <UserSection users={userLists.value.data.followers}>Followers</UserSection>
      <UserSection users={userLists.value.data.followeds}>Following</UserSection>
    </>
  )
}
