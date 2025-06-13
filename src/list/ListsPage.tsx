import { ReactNode } from 'react'
import publicListsQueryContext from './publicListsQueryContext'
import Lists from './Lists'

export default function ListsPage (): ReactNode {
  return (
    <publicListsQueryContext.Provider>
      <Lists />
    </publicListsQueryContext.Provider>
  )
}
