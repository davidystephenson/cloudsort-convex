import { ReactNode } from 'react'
import ListPageContent from './ListPageContent'
import listQueryContext from './listQueryContext'
import useListId from './useListId'

export default function ListPage (): ReactNode {
  const listId = useListId()

  return (
    <listQueryContext.Provider args={{ listId }}>
      <ListPageContent />
    </listQueryContext.Provider>
  )
}
