import { JSX } from 'react'
import { Td } from '@chakra-ui/react'
import UserMenu from './UserMenu'
import { RelatedUser } from './userTypes'
import userContext from './userContext'

export default function UserCells (props: {
  row: RelatedUser
}): JSX.Element {
  return (
    <userContext.Provider user={props.row}>
      <Td>{props.row.name}</Td>
      <Td>
        <UserMenu />
      </Td>
    </userContext.Provider>
  )
}
