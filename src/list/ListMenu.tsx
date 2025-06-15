import { JSX } from 'react'
import { MenuRobe } from 'robes'
import DeleteListItem from './DeleteListItem'
import PublishListItem from './PublishListItem'
import UnpublishListItem from './UnpublishListItem'
import authUserContext from '../auth/authUserContext'
import listContext from './listContext'

export default function ListMenu (): JSX.Element {
  const authUser = authUserContext.useMaybe()
  const list = listContext.use()
  if (!authUser.provided || list.doc.userId !== authUser.value._id) {
    return <></>
  }
  return (
    <MenuRobe>
      <PublishListItem />
      <UnpublishListItem />
      <DeleteListItem />
    </MenuRobe>
  )
}
