import { JSX } from 'react'
import LayoutPage from '../layout/LayoutPage'
import { useQuery } from 'convex/react'
import { useParams } from 'react-router-dom'
import { api } from '../../convex/_generated/api'
import ListNotFound from './ListNotFound'
import { listQueryContext } from './listQueryContext'
import ListConsumer from './ListConsumer'

export default function List (): JSX.Element {
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
      <ListConsumer />
    </listQueryContext.Provider>
  )
}
