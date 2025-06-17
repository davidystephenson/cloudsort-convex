import { JSX } from 'react'
import { MenuRobe } from 'robes'
import DeleteListItem from './DeleteListItem'
import listContext from './listContext'
import PublicListItem from './PublicListItem'
import authContext from '../auth/authContext'

export default function ListMenu (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const list = listContext.use()
  if (!auth.provided || list.doc.userId !== auth.value._id) {
    return <></>
  }
  return (
    <MenuRobe>
      <PublicListItem />
      <DeleteListItem />
    </MenuRobe>
  )
}
