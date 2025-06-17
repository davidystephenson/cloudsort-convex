import { JSX } from 'react'
import { MenuRobe } from 'robes'
import DeleteListItem from './DeleteListItem'
import authUserContext from '../auth/authUserContext'
import listContext from './listContext'
import PublicListItem from './PublicListItem'

export default function ListMenu (): JSX.Element {
  const authUser = authUserContext.useMaybe()
  const list = listContext.use()
  if (!authUser.provided || list.doc.userId !== authUser.value.data._id) {
    return <></>
  }
  return (
    <MenuRobe>
      <PublicListItem />
      <DeleteListItem />
    </MenuRobe>
  )
}
