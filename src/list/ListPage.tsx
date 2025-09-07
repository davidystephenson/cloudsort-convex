import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import ListPageContent from './ListPageContent'

export default function ListPage (): ReactNode {
  const params = useParams()
  if (params.listId == null) {
    throw new Error('There is no listId')
  }

  return <ListPageContent listId={params.listId} />
}
