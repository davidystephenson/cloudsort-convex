import { JSX } from 'react'
import { listQueryContext } from './listQueryContext'
import ListNotFound from './ListNotFound'
import LayoutPage from '../layout/LayoutPage'
import { listIdQueryContext } from './listIdQueryContext'
import ListTitle from './ListTitle'
import listContext from './listContext'

export default function ListConsumer (): JSX.Element {
  const listId = listIdQueryContext.query.use()
  const list = listQueryContext.query.useMaybe()
  const loading = listId.loading || !list.provided || list.value.loading
  if (!loading && list.value.data == null) {
    return <ListNotFound />
  }
  if (list.value == null || list.value.data == null) {
    return <LayoutPage loading={loading} />
  }
  return (
    <listContext.Provider doc={list.value.data}>
      <ListTitle />
    </listContext.Provider>
  )
}
