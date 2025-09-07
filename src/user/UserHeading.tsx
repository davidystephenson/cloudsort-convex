import { ReactNode } from 'react'
import userContext from './userContext'
import { Heading, HStack } from '@chakra-ui/react'
import UserBadge from './UserBadge'
import UserMenu from './UserMenu'

export default function UserHeading (): ReactNode {
  const user = userContext.use()
  return (
    <HStack>
      <Heading size='lg'>{user.name}</Heading>
      <UserMenu />
      <UserBadge />
    </HStack>
  )
}
