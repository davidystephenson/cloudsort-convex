import { JSX } from 'react'
import { DeleteMenuItemRobe } from 'robes'
import deleteListContext from './deleteListContext'
import authContext from '../auth/authContext'
import listContext from './listContext'

export default function DeleteListItem (): JSX.Element {
  const auth = authContext.useMaybe()
  const deleteList = deleteListContext.use()
  const list = listContext.use()
  if (auth.value == null || auth.value._id !== list.userId) {
    return <></>
  }
  function handleClick (): void {
    void deleteList.act()
  }
  return (
    <DeleteMenuItemRobe onClick={handleClick}>
      Delete
    </DeleteMenuItemRobe>
  )
}
