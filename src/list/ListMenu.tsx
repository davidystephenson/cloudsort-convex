import { JSX } from 'react'
import { MenuRobe, LinkMenuItemRobe } from 'robes'
import listContext from './listContext'
import PrivateListItems from './PrivateListItems'

export default function ListMenu (): JSX.Element {
  const list = listContext.use()
  const url = `${window.location.origin}/list/${list._id}`
  function handleLink (): void {
    void window.navigator.clipboard.writeText(url)
  }
  return (
    <MenuRobe>
      <LinkMenuItemRobe onClick={handleLink}>
        Copy List Link
      </LinkMenuItemRobe>
      <PrivateListItems />
    </MenuRobe>
  )
}
