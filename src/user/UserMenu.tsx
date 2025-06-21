import { JSX } from 'react'
import { LinkMenuItemRobe, MenuRobe } from 'robes'
import RenameAuthItem from '../auth/RenameAuthItem'
import FollowingItem from '../follow/FollowingItem'
import userContext from './userContext'

export default function UserMenu (): JSX.Element {
  const user = userContext.use()
  const url = `${window.location.origin}/user/${user._id}`
  function handleLink (): void {
    void window.navigator.clipboard.writeText(url)
  }
  return (
    <MenuRobe>
      <LinkMenuItemRobe onClick={handleLink}>
        Copy Profile Link
      </LinkMenuItemRobe>
      <RenameAuthItem />
      <FollowingItem />
    </MenuRobe>
  )
}
