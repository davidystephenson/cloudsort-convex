import { JSX } from 'react'
import { listQueryContext } from './listQueryContext'
import ListNotFound from './ListNotFound'
import LayoutPage from '../layout/LayoutPage'
import useAuthLoading from '../auth/useAuthLoading'
import { listIdQueryContext } from './listIdQueryContext'

export default function ListConsumer (): JSX.Element {
  const authLoading = useAuthLoading()
  const listId = listIdQueryContext.use()
  const list = listQueryContext.useMaybe()
  const loading = authLoading || listId.loading || !list.provided || list.value.loading
  if (!loading && list.value.data == null) {
    return <ListNotFound />
  }
  return (
    <LayoutPage loading={loading} title={list.value?.data?.name} />
  )
}
