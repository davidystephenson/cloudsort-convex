import { ReactNode } from 'react'
import authContext from '../auth/authContext'
import LayoutReeling from '../layout/LayoutReeling'
import userIdContext from './userIdContext'
import userListsContext from './userListsContext'
import userContext from './userContext'
import { Heading, HStack } from '@chakra-ui/react'
import UserPageMenu from './UserPageMenu'
import UserBadge from './UserBadge'

export default function UserHeading (): ReactNode {
  const auth = authContext.query.useMaybe()
  const userId = userIdContext.query.use()
  const userLists = userListsContext.query.use()
  if ((auth.provided && auth.value.loading) || userId.loading || userLists.loading) {
    return <LayoutReeling />
  }
  return (
    <userContext.Provider user={userLists.data.user}>
      <HStack>
        <Heading size='lg'>{userLists.data.user.name}</Heading>
        <UserPageMenu />
        <UserBadge />
      </HStack>
    </userContext.Provider>
  )
}
