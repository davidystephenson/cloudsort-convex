import { Heading, HStack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import publicListsContext from '../list/publicListsContext'
import LayoutLoading from '../layout/LayoutLoading'
import { useParams } from 'react-router-dom'
import LayoutNotFound from '../layout/LayoutNotFound'
import UserPageMenu from './UserPageMenu'
import UserListsTable from '../list/UserListsTable'

export default function UserLists (): ReactNode {
  const params = useParams()
  const publicLists = publicListsContext.query.use()
  if (publicLists.loading) {
    return <LayoutLoading />
  }
  const filtered = publicLists.data.filter((list) => list.userId === params.userId)
  if (filtered.length === 0) {
    return <LayoutNotFound>User {params.userId}</LayoutNotFound>
  }
  const first = filtered[0]
  return (
    <>
      <HStack>
        <Heading size='lg'>{first.userName}</Heading>
        <UserPageMenu />
      </HStack>
      <UserListsTable docs={filtered} />
    </>
  )
}
