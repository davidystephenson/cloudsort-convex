import { JSX } from 'react'
import { MenuRobe } from 'robes'
import DeleteListItem from './DeleteListItem'
import PublishListItem from './PublishListItem'
import UnpublishListItem from './UnpublishListItem'

export default function ListMenu (): JSX.Element {
  return (
    <MenuRobe>
      <PublishListItem />
      <UnpublishListItem />
      <DeleteListItem />
    </MenuRobe>
  )
}
