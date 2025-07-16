import { Td } from '@chakra-ui/react'
import { JSX } from 'react'
import { AuthListColumns } from './listTypes'

export default function AuthListColumnsCells (props: AuthListColumns): JSX.Element {
  void props
  return (
    <>
      <Td>Movie</Td>
      <Td>Points</Td>
    </>
  )
}
