import { JSX } from 'react'
import { MenuRobe } from 'robes'
import DeleteListItem from './DeleteListItem'
import listContext from './listContext'
import PublicListItem from './PublicListItem'
import authContext from '../auth/authContext'
import deleteListContext from './deleteListContext'

export default function ListMenu (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const list = listContext.use()
  if (!auth.provided || list.doc.userId !== auth.value._id) {
    return <></>
  }
  const args = { listId: list.doc._id }
  return (
    <MenuRobe>
      <PublicListItem />
      <deleteListContext.Provider args={args}>
        <DeleteListItem />
      </deleteListContext.Provider>
    </MenuRobe>
  )
}
