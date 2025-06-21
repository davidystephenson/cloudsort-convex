import { JSX } from 'react'
import { UserBase } from '../list/listTypes'
import { Td } from '@chakra-ui/react'
import userContext from './userContext'

export default function UserCells (props: {
  row: UserBase
}): JSX.Element {
  return (
    <userContext.Provider doc={props.row}>
      <Td>{props.row.name}</Td>
    </userContext.Provider>
  )
}
