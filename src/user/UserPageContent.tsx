import { JSX } from 'react'
import LayoutNotFound from '../layout/LayoutNotFound'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'
import Header from '../header/Header'
import authContext from '../auth/authContext'
import userContext from './userContext'
import UserHeading from './UserHeading'
import UserListsTable from '../list/UserListsTable'
import UserSection from './UserSection'

export default function UserPageContent(props: {
  userId: string
}): JSX.Element {
  const user = useArchedQuery({ args: { userId: props.userId }, query: api.user.default })
  if (user.loading) {
    return <Header loading />
  }
  if (user.data.user == null) {
    return (
      <>
        <Header />
        <LayoutNotFound>User {props.userId}</LayoutNotFound>
      </>
    )
  }
  return (
    <authContext.Provider user={user.data.auth}>
      <userContext.Provider user={user.data.user}>
        <Header />
        <UserHeading />
        <UserListsTable docs={user.data.lists} />
        <UserSection users={user.data.followers}>Followers</UserSection>
        <UserSection users={user.data.followeds}>Following</UserSection>
      </userContext.Provider>
    </authContext.Provider>
  )
}
