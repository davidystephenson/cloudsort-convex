import { JSX } from 'react'
import { LinkMenuItemRobe } from 'robes'
import listContext from './listContext'
import UserLinkMenuItem from '../user/UserLinkMenuItem'

export default function ListLinkMenuItems (): JSX.Element {
  const list = listContext.use()
  const url = `${window.location.origin}/list/${list._id}`
  function handleLink (): void {
    void window.navigator.clipboard.writeText(url)
  }
  return (
    <>
      <LinkMenuItemRobe onClick={handleLink}>
        Copy list link
      </LinkMenuItemRobe>
      <UserLinkMenuItem />
    </>
  )
}
