import { JSX } from 'react'
import { MenuRobe } from 'robes'
import DeleteListItem from './DeleteListItem'

export default function ListMenu (): JSX.Element {
  return (
    <MenuRobe>
      <DeleteListItem />
    </MenuRobe>
  )
}
