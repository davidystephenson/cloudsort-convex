import { ReactNode } from 'react'
import authListsQueryContext from './authListsQueryContext'
import AuthUserLists from './AuthUserLists'
import CreateListForm from './CreateListForm'
import authListsContext from './authListsContext'
import publicListsContext from './publicListsContext'
import authUserContext from '../auth/authUserContext'
import { Heading } from '@chakra-ui/react'
import ListsTable from './ListsTable'
import ListsLoading from './ListsLoading'

export default function AuthListsContent (): ReactNode {
  const authListsQuery = authListsQueryContext.use()
  const authUser = authUserContext.use()
  const publicLists = publicListsContext.use()
  if (authListsQuery.loading) {
    return <ListsLoading />
  }
  const filtered = publicLists.filter((list) => list.userId !== authUser._id)
  return (
    <authListsContext.Provider data={authListsQuery.data}>
      <CreateListForm />
      <AuthUserLists />
      <Heading size='md'>Public</Heading>
      <ListsTable docs={filtered} />
    </authListsContext.Provider>
  )
}
