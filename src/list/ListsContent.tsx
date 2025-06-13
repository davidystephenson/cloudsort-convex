import { ReactNode } from 'react'
import LayoutPage from '../layout/LayoutPage'
import authUserContext from '../auth/authUserContext'
import authListsQueryContext from './authListsQueryContext'
import publicListsContext from './publicListsContext'
import ListsTable from './ListsTable'
import AuthListsContent from './AuthListsContent'

export default function ListsContent (): ReactNode {
  const authUser = authUserContext.useMaybe()
  const publicLists = publicListsContext.use()
  if (authUser == null) {
    return (
      <LayoutPage title='Lists'>
        <ListsTable docs={publicLists} />
      </LayoutPage>
    )
  }
  return (
    <authListsQueryContext.Provider>
      <AuthListsContent />
    </authListsQueryContext.Provider>
  )
}
