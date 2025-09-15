import { JSX } from 'react'
import HeaderLoaded from '../header/HeaderLoaded'
import userContext from './userContext'
import UserHeading from './UserHeading'
import UserListsTable from '../list/UserListsTable'
import UserSection from './UserSection'
import LayoutNotFound from '../layout/LayoutNotFound'
import userQueryContext from './userQueryContext'
import useUserId from './userUserId'

export default function UserPageLoaded (): JSX.Element {
  const userId = useUserId()
  const userQuery = userQueryContext.data.use()
  if (userQuery.user == null) {
    return <LayoutNotFound id={userId} label='User' />
  }
  return (
    <>
      <HeaderLoaded />
      <userContext.Provider user={userQuery.user}>
        <UserHeading />
        <UserListsTable docs={userQuery.lists} />
        <UserSection users={userQuery.followers}>Followers</UserSection>
        <UserSection users={userQuery.followeds}>Following</UserSection>
      </userContext.Provider>
    </>
  )
}
