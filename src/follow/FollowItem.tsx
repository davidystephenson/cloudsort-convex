import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import followContext from './followContext'
import { RiUserFollowFill } from 'react-icons/ri'

export default function FollowItem (): JSX.Element {
  const follow = followContext.use()
  function handleClick (): void {
    void follow.act()
  }
  return (
    <MenuItem icon={<RiUserFollowFill />} onClick={handleClick}>
      Follow
    </MenuItem>
  )
}
