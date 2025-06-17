import { JSX } from 'react'
import authUserContext from '../auth/authUserContext'
import authListsQueryContext from './authListsQueryContext'
import AuthLists from './AuthLists'
import { useConvexAuth } from 'convex/react'
import authUserQueryContext from '../auth/authUserQueryContext'
import ListsLoading from './ListsLoading'
import ListsTable from './ListsTable'
import publicListsQueryContext from './publicListsQueryContext'
import LayoutPage from '../layout/LayoutPage'
import { HStack } from '@chakra-ui/react'
import { MdPublic } from 'react-icons/md'

export default function Lists (): JSX.Element {
  const auth = useConvexAuth()
  const authUser = authUserContext.useMaybe()
  const authUserQuery = authUserQueryContext.useMaybe()
  const publicListsQuery = publicListsQueryContext.use()
  if (auth.isLoading) {
    return <LayoutPage loading />
  }
  if (authUserQuery.provided && authUserQuery.value.loading) {
    return <ListsLoading />
  }
  if (!authUser.provided) {
    return (
      <LayoutPage
        loading={publicListsQuery == null}
        title={<HStack><span>Lists</span><MdPublic /></HStack>}
      >
        <ListsTable docs={publicListsQuery} />
      </LayoutPage>
    )
  }
  return (
    <authListsQueryContext.Provider>
      <AuthLists />
    </authListsQueryContext.Provider>
  )
}
