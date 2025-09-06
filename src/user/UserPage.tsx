import { JSX } from 'react'
import { useParams } from 'react-router-dom'
import LayoutNotFound from '../layout/LayoutNotFound'
import UserPageContent from './UserPageContent'

export default function UserPage (): JSX.Element {
  const params = useParams()
  if (params.userId == null) {
    return <LayoutNotFound>User {params.userId}</LayoutNotFound>
  }
  return <UserPageContent userId={params.userId} />
  // return (
  //   <userIdContext.Provider userId={params.userId}>
  //     <UserListsController>
  //       <UserLists />
  //     </UserListsController>
  //   </userIdContext.Provider>
  // )
}
