import { Badge, HStack } from '@chakra-ui/react'
import LayoutNotFound from '../layout/LayoutNotFound'
import { JSX } from 'react'

export default function UserNotFound (props: { userId: string }): JSX.Element {
  return (
    <LayoutNotFound>
      <HStack><span>User</span> <Badge fontSize='md'>{props.userId}</Badge></HStack>
    </LayoutNotFound>
  )
}
