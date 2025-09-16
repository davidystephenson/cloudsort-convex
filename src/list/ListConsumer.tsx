import { JSX } from 'react'
import authListContext from './authListContext'
import AuthListTable from './AuthListTable'
import Choice from '../choice/Choice'
import listQueryContext from './listQueryContext'
import useListId from './useListId'
import ListItemsTable from '../item/ListItemsTable'
import listContext from './listContext'
import hidesContext from '../hide/hidesContext'

export default function ListConsumer (): JSX.Element {
  const list = listContext.use()
  const listId = useListId()
  const listQuery = listQueryContext.data.use()
  if (listQuery.list == null) {
    throw new Error(`List missing: ${listId}`)
  }
  if ('hides' in listQuery) {
    return (
      <hidesContext.Provider hides={listQuery.hides}>
        <authListContext.Provider list={listQuery.list}>
          <Choice />
          <AuthListTable />
        </authListContext.Provider>
      </hidesContext.Provider>
    )
  }
  return <ListItemsTable listItems={list.listItems} />
}
