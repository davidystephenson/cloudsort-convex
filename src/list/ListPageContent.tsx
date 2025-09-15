import { JSX } from 'react'
import AuthController from '../auth/AuthController'
import HeaderLoading from '../header/HeaderLoading'
import listQueryContext from './listQueryContext'
import ListPageLoaded from './ListPageLoaded'

export default function ListPageContent (): JSX.Element {
  const listQuery = listQueryContext.query.use()
  if (listQuery.isPending) {
    return <HeaderLoading />
  }
  if (listQuery.isError) {
    return <div>Error: {listQuery.error?.message}</div>
  }
  return (
    <AuthController auth={listQuery.data.auth}>
      <ListPageLoaded />
    </AuthController>
  )
}
