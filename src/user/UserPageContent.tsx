import { JSX } from 'react'
import AuthController from '../auth/AuthController'
import HeaderLoading from '../header/HeaderLoading'
import userQueryContext from './userQueryContext'
import UserPageLoaded from './UserPageLoaded'

export default function UserPageContent (): JSX.Element {
  const userQuery = userQueryContext.query.use()
  if (userQuery.isPending) {
    return <HeaderLoading />
  }
  if (userQuery.isError) {
    return <div>Error: {userQuery.error?.message}</div>
  }
  return (
    <AuthController auth={userQuery.data.auth}>
      <UserPageLoaded />
    </AuthController>
  )
}
