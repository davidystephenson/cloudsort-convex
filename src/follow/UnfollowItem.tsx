import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { RiUserUnfollowFill } from 'react-icons/ri'
import unfollowContext from './unfollowContext'

export default function UnfollowItem (): JSX.Element {
  const unfollow = unfollowContext.use()
  function handleClick (): void {
    void unfollow.act()
  }
  return (
    <MenuItem icon={<RiUserUnfollowFill />} onClick={handleClick}>
      Unfollow
    </MenuItem>
  )
}
