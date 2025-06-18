import { JSX } from 'react'
import { MenuRobe } from 'robes'
import RenameAuthItem from './RenameAuthItem'
import renameAuthContext from './renameAuthContext'

export default function AuthMenu (): JSX.Element {
  const rename = renameAuthContext.use()
  if (rename.active) {
    return <></>
  }
  return (
    <MenuRobe>
      <RenameAuthItem />
    </MenuRobe>
  )
}
