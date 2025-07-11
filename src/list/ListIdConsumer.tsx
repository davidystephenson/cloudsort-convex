import { ReactNode } from 'react'
import ListConsumer from './ListConsumer'
import { listQueryContext } from './listQueryContext'
import { listIdQueryContext } from './listIdQueryContext'
import ListNotFound from './ListNotFound'
import { listIdContext } from './listIdContext'

export default function ListIdConsumer (): ReactNode {
  const query = listIdQueryContext.query.use()
  if (query.loading) {
    return <ListConsumer />
  }
  if (query.data == null) {
    return <ListNotFound />
  }
  return (
    <listIdContext.Provider listId={query.data}>
      <listQueryContext.Provider listId={query.data}>
        <ListConsumer />
      </listQueryContext.Provider>
    </listIdContext.Provider>
  )
}
