import { JSX } from 'react'
import LayoutNotFound from '../layout/LayoutNotFound'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'
import AuthController from '../auth/AuthController'
import listContext from './listContext'
import authListContext from './authListContext'
import AuthListTable from './AuthListTable'
import ListHeader from './ListHeader'
import PublicList from './PublicList'
import Choice from '../choice/Choice'
import HeaderLoading from '../header/HeaderLoading'
import HeaderLoaded from '../header/HeaderLoaded'

export default function ListPageContent (props: {
  listId: string
}): JSX.Element {
  const list = useArchedQuery({ args: { listId: props.listId }, query: api.list.default })
  console.log('list', list)
  if (list.loading) {
    return <HeaderLoading />
  }
  if (list.data.list == null) {
    return <LayoutNotFound id={props.listId} label='List' />
  }
  if ('choices' in list.data.list) {
    return (
      <AuthController auth={list.data.auth}>
        <listContext.Provider list={list.data.list}>
          <HeaderLoaded>
            <ListHeader />
          </HeaderLoaded>
          <authListContext.Provider list={list.data.list}>
            <Choice />
            <AuthListTable />
          </authListContext.Provider>
        </listContext.Provider>
      </AuthController>
    )
  }
  return (
    <AuthController auth={list.data.auth}>
      <listContext.Provider list={list.data.list}>
        <PublicList />
      </listContext.Provider>
    </AuthController>
  )
}
