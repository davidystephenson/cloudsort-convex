import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import ListNotFound from './ListNotFound'
import ListPageContent from './ListPageContent'

export default function ListPage (): ReactNode {
  const params = useParams()
  if (params.listId == null) {
    return <ListNotFound />
  }

  return <ListPageContent listId={params.listId} />
}
