import { JSX } from 'react'
import { MenuRobe } from 'robes'
import RenameAuthItem from '../auth/RenameAuthItem'
import FollowingItem from '../follow/FollowingItem'
import renameAuthContext from '../auth/renameAuthContext'
import UserLinkMenuItem from './UserLinkMenuItem'

export default function UserMenu (): JSX.Element {
  return (
    <MenuRobe>
      <UserLinkMenuItem />
      <renameAuthContext.Provider>
        <RenameAuthItem />
      </renameAuthContext.Provider>
      <FollowingItem />
    </MenuRobe>
  )
}
