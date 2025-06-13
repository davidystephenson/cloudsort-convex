import { ReactNode } from 'react'
import publicListsQueryContext from './publicListsQueryContext'
import ListsPageContent from './ListsPageContent'

export default function ListsPage (): ReactNode {
  return (
    <publicListsQueryContext.Provider>
      <ListsPageContent />
    </publicListsQueryContext.Provider>
  )
}
