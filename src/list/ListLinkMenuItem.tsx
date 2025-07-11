import { JSX } from 'react'
import { LinkMenuItemRobe } from 'robes'
import listContext from './listContext'

export default function ListMenu (): JSX.Element {
  const list = listContext.use()
  const url = `${window.location.origin}/list/${list._id}`
  function handleLink (): void {
    void window.navigator.clipboard.writeText(url)
  }
  return (
    <LinkMenuItemRobe onClick={handleLink}>
      Copy List Link
    </LinkMenuItemRobe>
  )
}
