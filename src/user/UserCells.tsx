import { JSX } from 'react'
import { HStack, Td } from '@chakra-ui/react'
import UserMenu from './UserMenu'
import { RelatedUser } from './userTypes'
import userContext from './userContext'
import UserBadge from './UserBadge'
import ClinkRobe from 'clink-robe'

export default function UserCells (props: {
  row: RelatedUser
}): JSX.Element {
  return (
    <userContext.Provider user={props.row}>
      <Td>
        <ClinkRobe to={`/user/${props.row._id}`}>
          <HStack>
            <span>{props.row.name}</span>
            <UserBadge />
          </HStack>
        </ClinkRobe>
      </Td>
      <Td>
        <UserMenu />
      </Td>
    </userContext.Provider>
  )
}
