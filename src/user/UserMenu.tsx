import { JSX } from 'react'
import { LinkMenuItemRobe, MenuRobe } from 'robes'
import RenameAuthItem from '../auth/RenameAuthItem'
import FollowingItem from '../follow/FollowingItem'
import userIdContext from './userIdContext'

export default function UserMenu (props: {
  follow: boolean
  unfollow: boolean
}): JSX.Element {
  const userId = userIdContext.use()
  const url = `${window.location.origin}/user/${userId}`
  function handleLink (): void {
    void window.navigator.clipboard.writeText(url)
  }
  return (
    <MenuRobe>
      <LinkMenuItemRobe onClick={handleLink}>
        Copy Profile Link
      </LinkMenuItemRobe>
      <RenameAuthItem />
      <FollowingItem
        follow={props.follow}
        unfollow={props.unfollow}
      />
    </MenuRobe>
  )
}
