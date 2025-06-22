import { JSX } from 'react'
import { Badge } from '@chakra-ui/react'
import userContext from './userContext'

export default function UserLabel (): JSX.Element {
  const user = userContext.use()
  if (user.followed) {
    return <Badge size='xs'>Follows You</Badge>
  }
  if (user.follower) {
    return <Badge>Following</Badge>
  }
  return <></>
}
