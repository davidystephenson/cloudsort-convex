import { ReactNode } from 'react'
import authListsQueryContext from './authListsQueryContext'
import AuthUserLists from './AuthUserLists'
import CreateListForm from './CreateListForm'
import authListsContext from './authListsContext'
import authUserContext from '../auth/authUserContext'
import { Heading } from '@chakra-ui/react'
import ListsTable from './ListsTable'
import ListsLoading from './ListsLoading'
import LayoutPage from '../layout/LayoutPage'
import publicListsQueryContext from './publicListsQueryContext'

export default function AuthLists (): ReactNode {
  const authListsQuery = authListsQueryContext.use()
  const authUser = authUserContext.use()
  const publicListsQuery = publicListsQueryContext.use()
  if (authListsQuery.loading || publicListsQuery.loading) {
    return <ListsLoading />
  }
  const filtered = publicListsQuery.data.filter((list) => list.userId !== authUser._id)
  return (
    <authListsContext.Provider data={authListsQuery.data}>
      <LayoutPage title='Lists'>
        <CreateListForm />
        <AuthUserLists />
        <Heading size='md'>Public</Heading>
        <ListsTable docs={filtered} />
      </LayoutPage>
    </authListsContext.Provider>
  )
}
