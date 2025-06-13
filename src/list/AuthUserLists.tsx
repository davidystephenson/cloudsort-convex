import { JSX } from 'react'
import ListsTable from './ListsTable'
import authListsContext from './authListsContext'

export default function AuthUserLists (): JSX.Element {
  const authLists = authListsContext.use()

  return <ListsTable docs={authLists} />
}
