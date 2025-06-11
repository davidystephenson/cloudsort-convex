import { JSX } from 'react'
import listContext from './listContext'
import { DeleteMenuItemRobe } from 'robes'

export default function DeleteListItem (): JSX.Element {
  const list = listContext.use()
  function handleClick (): void {
    void list.delete()
  }
  return (
    <DeleteMenuItemRobe onClick={handleClick}>
      Delete
    </DeleteMenuItemRobe>
  )
}
