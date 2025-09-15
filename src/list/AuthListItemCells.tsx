import { JSX } from 'react'
import ListItemCells from '../item/ListItemCells'
import { AuthListItem } from './listTypes'

export default function AuthListItemCells (props: AuthListItem): JSX.Element {
  return <ListItemCells row={props.item} />
}
