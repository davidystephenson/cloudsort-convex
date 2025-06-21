import { Heading, HStack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import LayoutLoading from '../layout/LayoutLoading'
import UserPageMenu from './UserPageMenu'
import UserListsTable from '../list/UserListsTable'
import userIdContext from './userIdContext'
import userListsContext from './userListsContext'

export default function UserLists (): ReactNode {
  const userId = userIdContext.query.use()
  const userLists = userListsContext.query.useMaybe()
  if (userId.loading || !userLists.provided || userLists.value.loading) {
    return <LayoutLoading />
  }
  return (
    <>
      <HStack>
        <Heading size='lg'>{userLists.value.data.user.name}</Heading>
        <UserPageMenu />
      </HStack>
      <UserListsTable docs={userLists.value.data.lists} />
    </>
  )
}
