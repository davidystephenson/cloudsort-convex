import { ReactNode } from 'react'
import ListConsumer from './ListConsumer'
import { listQueryContext } from './listQueryContext'
import { listIdContext } from './listIdContext'
import ListNotFound from './ListNotFound'

export default function ListIdConsumer (): ReactNode {
  const query = listIdContext.query.use()
  if (query.loading) {
    return <ListConsumer />
  }
  if (query.data == null) {
    return <ListNotFound />
  }
  return (
    <listQueryContext.Provider listId={query.data}>
      <ListConsumer />
    </listQueryContext.Provider>
  )
}
