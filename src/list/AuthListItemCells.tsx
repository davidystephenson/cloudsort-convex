import { JSX } from 'react'
import listContext from './listContext'
import ListItemCells from '../item/ListItemCells'
import { AuthListItem } from './listTypes'

export default function AuthListItemCells (props: AuthListItem): JSX.Element {
  const list = listContext.use()
  const item = list.listItems.find(listItem => listItem.item.uid === props.uid)
  if (item == null) {
    throw new Error(`Item ${props.uid} not found`)
  }
  return <ListItemCells row={item} />
}
