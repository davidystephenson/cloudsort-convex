import { JSX } from 'react'
import { MenuRobe } from 'robes'
import RenameAuthItem from './RenameAuthItem'
import authActionsContext from './authActionsContext'

export default function AuthMenu (): JSX.Element {
  const authUser = authActionsContext.use()
  if (authUser.rename.active) {
    return <></>
  }
  return (
    <MenuRobe>
      <RenameAuthItem />
    </MenuRobe>
  )
}
