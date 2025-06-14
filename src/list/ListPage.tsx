import { ReactNode } from 'react'
import Lists from './Lists'
import { useParams } from 'react-router-dom'
import ListNotFound from './ListNotFound'
import { api } from '../../convex/_generated/api'
import { useQuery } from 'convex/react'
import LayoutPage from '../layout/LayoutPage'
import { listQueryContext } from './listQueryContext'

export default function ListPage (): ReactNode {
  const { listId: param } = useParams()
  if (param == null) {
    return <ListNotFound />
  }
  const listId = useQuery(api.normalizeListId.q, { listId: param })
  if (listId === undefined) {
    return <LayoutPage loading />
  }
  if (listId === null) {
    return <ListNotFound />
  }
  return (
    <listQueryContext.Provider listId={listId}>
      <Lists />
    </listQueryContext.Provider>
  )
}
