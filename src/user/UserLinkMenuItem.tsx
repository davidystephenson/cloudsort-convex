import { JSX } from 'react'
import userContext from './userContext'
import { LinkMenuItemRobe } from 'robes'

export default function UserLinkMenuItem (): JSX.Element {
  const user = userContext.use()
  const url = `${window.location.origin}/user/${user._id}`
  function handleLink (): void {
    void window.navigator.clipboard.writeText(url)
  }
  return (
    <LinkMenuItemRobe onClick={handleLink}>
      Copy user link
    </LinkMenuItemRobe>
  )
}
