import { JSX } from 'react'
import { listQueryContext } from './listQueryContext'
import ListNotFound from './ListNotFound'
import LayoutPage from '../layout/LayoutPage'

export default function ListConsumer (): JSX.Element {
  const list = listQueryContext.use()
  if (list.loading) {
    return <LayoutPage loading />
  }
  if (list.data == null) {
    return <ListNotFound />
  }
  return (
    <LayoutPage title={list.data.name} />
  )
}
