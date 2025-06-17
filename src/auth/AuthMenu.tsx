import { JSX } from 'react'
import { MenuRobe } from 'robes'
import RenameAuthItem from './RenameAuthItem'
import authUserContext from './authUserContext'

export default function AuthMenu (): JSX.Element {
  const authUser = authUserContext.use()
  if (authUser.renaming) {
    return <></>
  }
  return (
    <MenuRobe>
      <RenameAuthItem />
    </MenuRobe>
  )
}
