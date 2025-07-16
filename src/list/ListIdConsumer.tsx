import { ReactNode } from 'react'
import { getListContext } from './getListContext'
import { listIdQueryContext } from './listIdQueryContext'
import ListNotFound from './ListNotFound'
import { listIdContext } from './listIdContext'
import GetListConsumer from './GetListConsumer'

export default function ListIdConsumer (): ReactNode {
  const query = listIdQueryContext.query.use()
  if (query.loading) {
    return <GetListConsumer />
  }
  if (query.data == null) {
    return <ListNotFound />
  }
  return (
    <listIdContext.Provider listId={query.data}>
      <getListContext.Provider listId={query.data}>
        <GetListConsumer />
      </getListContext.Provider>
    </listIdContext.Provider>
  )
}
