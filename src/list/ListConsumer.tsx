import { JSX } from 'react'
import { listQueryContext } from './listQueryContext'
import ListNotFound from './ListNotFound'
import LayoutPage from '../layout/LayoutPage'
import { listIdQueryContext } from './listIdQueryContext'
import ListHeader from './ListHeader'
import listContext from './listContext'
import ListItemsTable from '../item/ListItemsTable'
import Choice from '../choice/Choice'

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
    <listContext.Provider list={list.value.data}>
      <ListHeader />
      <Choice />
      <ListItemsTable
        listItems={list.value.data.items}
      />
    </listContext.Provider>
  )
}
