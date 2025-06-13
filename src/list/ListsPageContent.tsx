import { ReactNode } from 'react'
import authLoadingContext from '../auth/authLoadingContext'
import publicListsQueryContext from './publicListsQueryContext'
import publicListsContext from './publicListsContext'
import ListsContent from './ListsContent'
import ListsLoading from './ListsLoading'

export default function ListsPageContent (): ReactNode {
  const authLoading = authLoadingContext.use()
  const publicListsQuery = publicListsQueryContext.use()
  if (authLoading.loading || publicListsQuery.loading) {
    return <ListsLoading />
  }
  return (
    <publicListsContext.Provider data={publicListsQuery.data}>
      <ListsContent />
    </publicListsContext.Provider>
  )
}
