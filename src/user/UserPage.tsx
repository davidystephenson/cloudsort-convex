import { JSX } from 'react'
import { useParams } from 'react-router-dom'
import LayoutNotFound from '../layout/LayoutNotFound'
import UserLists from './UserLists'
import userIdContext from './userIdContext'
import UserListsController from './UserListsController'

export default function UserPage (): JSX.Element {
  const params = useParams()
  if (params.userId == null) {
    return <LayoutNotFound>User {params.userId}</LayoutNotFound>
  }
  return (
    <userIdContext.Provider userId={params.userId}>
      <UserListsController>
        <UserLists />
      </UserListsController>
    </userIdContext.Provider>
  )
}
