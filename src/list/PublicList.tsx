import { JSX } from 'react'
import ListHeader from './ListHeader'
import ListItemsTable from '../item/ListItemsTable'
import listContext from './listContext'

export default function PublicList (): JSX.Element {
  const list = listContext.use()
  return (
    <>
      <ListHeader />
      <ListItemsTable listItems={list.listItems} />
    </>
  )
}
