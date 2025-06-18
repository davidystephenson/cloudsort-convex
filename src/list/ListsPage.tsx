import { ReactNode } from 'react'
import publicListsContext from './publicListsContext'
import Lists from './Lists'

export default function ListsPage (): ReactNode {
  return (
    <publicListsContext.Provider>
      <Lists />
    </publicListsContext.Provider>
  )
}
