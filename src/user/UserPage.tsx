import { JSX } from 'react'
import { useParams } from 'react-router-dom'
import LayoutNotFound from '../layout/LayoutNotFound'
import publicListsContext from '../list/publicListsContext'
import UserLists from './UserLists'

export default function UserPage (): JSX.Element {
  const params = useParams()
  if (params.userId == null) {
    return <LayoutNotFound>User {params.userId}</LayoutNotFound>
  }
  return (
    <publicListsContext.Provider>
      <UserLists />
    </publicListsContext.Provider>
  )
}
