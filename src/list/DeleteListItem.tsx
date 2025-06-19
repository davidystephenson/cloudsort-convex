import { JSX } from 'react'
import { DeleteMenuItemRobe } from 'robes'
import deleteListContext from './deleteListContext'

export default function DeleteListItem (): JSX.Element {
  const deleteList = deleteListContext.use()
  function handleClick (): void {
    void deleteList.act()
  }
  return (
    <DeleteMenuItemRobe onClick={handleClick}>
      Delete
    </DeleteMenuItemRobe>
  )
}
