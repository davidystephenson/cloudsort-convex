import { JSX, ReactNode } from 'react'
import userListsContext from './userListsContext'
import userIdContext from './userIdContext'
import LayoutNotFound from '../layout/LayoutNotFound'
import { useParams } from 'react-router-dom'

export default function UserListsController (props: {
  children: ReactNode
}): JSX.Element {
  const params = useParams()
  const userId = userIdContext.data.useMaybe()
  if (userId.provided) {
    if (userId.value == null) {
      return <LayoutNotFound>User {params.userId}</LayoutNotFound>
    }
    return (
      <userListsContext.Provider userId={userId.value}>
        {props.children}
      </userListsContext.Provider>
    )
  }
  return <>{props.children}</>
}
