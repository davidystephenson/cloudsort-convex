import { JSX } from 'react'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'
import Header from '../header/Header'
import userContext from './userContext'
import UserHeading from './UserHeading'
import UserListsTable from '../list/UserListsTable'
import UserSection from './UserSection'
import AuthController from '../auth/AuthController'
import LayoutNotFound from '../layout/LayoutNotFound'

export default function UserPageContent (props: {
  userId: string
}): JSX.Element {
  const user = useArchedQuery({
    args: { userId: props.userId }, query: api.user.default
  })
  if (user.loading) {
    return <Header loading />
  }
  if (user.data.user == null) {
    return <LayoutNotFound id={props.userId} label='User' />
  }
  return (
    <AuthController auth={user.data.auth}>
      <Header />
      <userContext.Provider user={user.data.user}>
        <UserHeading />
        <UserListsTable docs={user.data.lists} />
        <UserSection users={user.data.followers}>Followers</UserSection>
        <UserSection users={user.data.followeds}>Following</UserSection>
      </userContext.Provider>
    </AuthController>
  )
}
