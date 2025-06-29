import { JSX } from 'react'
import { LinkMenuItemRobe, MenuRobe } from 'robes'
import RenameAuthItem from '../auth/RenameAuthItem'
import FollowingItem from '../follow/FollowingItem'
import userContext from './userContext'
import renameAuthContext from '../auth/renameAuthContext'

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
      <renameAuthContext.Provider>
        <RenameAuthItem />
      </renameAuthContext.Provider>
      <FollowingItem />
    </MenuRobe>
  )
}
