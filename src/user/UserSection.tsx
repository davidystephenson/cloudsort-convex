import { JSX, ReactNode } from 'react'
import { RelatedUser } from './userTypes'
import { Heading } from '@chakra-ui/react'
import UserCells from './UserCells'
import UsersTable from './UsersTable'

export default function UserSection (props: {
  children: ReactNode
  users: RelatedUser[]
}): JSX.Element {
  if (props.users.length === 0) {
    return <></>
  }
  return (
    <>
      <Heading size='md'>{props.children}</Heading>
      <UsersTable
        Cells={UserCells}
        columns={['User', '']}
        users={props.users}
      />
    </>
  )
}
