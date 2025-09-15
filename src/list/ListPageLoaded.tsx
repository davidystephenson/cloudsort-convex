import { JSX } from 'react'
import LayoutNotFound from '../layout/LayoutNotFound'
import AuthController from '../auth/AuthController'
import listContext from './listContext'
import authListContext from './authListContext'
import AuthListTable from './AuthListTable'
import ListHeader from './ListHeader'
import PublicList from './PublicList'
import Choice from '../choice/Choice'
import HeaderLoaded from '../header/HeaderLoaded'
import listQueryContext from './listQueryContext'
import useListId from './useListId'

export default function ListPageLoaded (): JSX.Element {
  const listId = useListId()
  const listQuery = listQueryContext.data.use()
  if (listQuery.list == null) {
    return <LayoutNotFound id={listId} label='List' />
  }
  if ('choices' in listQuery.list) {
    return (
      <AuthController auth={listQuery.auth}>
        <listContext.Provider list={listQuery.list}>
          <HeaderLoaded>
            <ListHeader />
          </HeaderLoaded>
          <authListContext.Provider list={listQuery.list}>
            <Choice />
            <AuthListTable />
          </authListContext.Provider>
        </listContext.Provider>
      </AuthController>
    )
  }
  return (
    <AuthController auth={listQuery.auth}>
      <listContext.Provider list={listQuery.list}>
        <PublicList />
      </listContext.Provider>
    </AuthController>
  )
}
