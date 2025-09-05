import { JSX } from 'react'
import authorizeListContext from '../auth/authorizeListContext'
import getAuthContext from '../auth/getAuthContext'
import listContext from './listContext'
import { getListContext } from './getListContext'
import { listIdQueryContext } from './listIdQueryContext'
import ListNotFound from './ListNotFound'
import LayoutTitle from '../layout/LayoutPage'
import AuthList from './AuthList'
import PublicList from './PublicList'

export default function ListConsumer (): JSX.Element {
  const authorizeList = authorizeListContext.query.useMaybe()
  const auth = getAuthContext.data.useMaybe()
  const getList = getListContext.query.useMaybe()
  const list = listContext.useMaybe()
  const listId = listIdQueryContext.query.use()
  const authorizeLoading = authorizeList.provided && authorizeList.value.loading
  const loading = authorizeLoading || listId.loading || !getList.provided || getList.value.loading
  if (!loading && getList.value.data == null) {
    return <ListNotFound />
  }
  if (loading) {
    return <LayoutTitle loading />
  }
  const authed = auth.provided && list.provided && auth.value._id === list.value.userId
  if (authed) {
    return <AuthList />
  }
  return <PublicList />
}
