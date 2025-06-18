import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import ListNotFound from './ListNotFound'
import { listIdContext } from './listIdQueryContext'
import ListIdConsumer from './ListIdConsumer'

export default function ListPage (): ReactNode {
  const { listId: param } = useParams()
  if (param == null) {
    return <ListNotFound />
  }

  return (
    <listIdContext.Provider listId={param}>
      <ListIdConsumer />
    </listIdContext.Provider>
  )
}
