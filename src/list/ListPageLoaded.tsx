import { JSX } from 'react'
import LayoutNotFound from '../layout/LayoutNotFound'
import listQueryContext from './listQueryContext'
import useListId from './useListId'
import ListController from './ListController'
import ListConsumer from './ListConsumer'

export default function ListPageLoaded (): JSX.Element {
  const listId = useListId()
  const listQuery = listQueryContext.data.use()
  if (listQuery.list == null) {
    return <LayoutNotFound id={listId} label='List' />
  }
  return (
    <ListController
      auth={listQuery.auth}
      list={listQuery.list}
      user={listQuery.list.user}
    >
      <ListConsumer />
    </ListController>
  )
}
