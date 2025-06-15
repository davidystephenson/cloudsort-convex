import { JSX } from 'react'
import LayoutTitle from '../layout/LayoutPage'
import { useParams } from 'react-router-dom'
import { api } from '../../convex/_generated/api'
import ListNotFound from './ListNotFound'
import { listQueryContext } from './listQueryContext'
import ListConsumer from './ListConsumer'
import { useArchedQuery } from '../arched/useArchedQuery'

export default function List (): JSX.Element {
  const { listId: param } = useParams()
  if (param == null) {
    return <ListNotFound />
  }
  const listId = useArchedQuery({
    args: { listId: param },
    query: api.normalizeListId.q
  })
  if (listId.loading) {
    return <LayoutTitle loading />
  }
  if (listId.data == null) {
    return <ListNotFound />
  }
  return (
    <listQueryContext.Provider listId={listId.data}>
      <ListConsumer />
    </listQueryContext.Provider>
  )
}
