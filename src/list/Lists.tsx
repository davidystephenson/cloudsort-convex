import { JSX } from 'react'
import authListsQueryContext from './authListsQueryContext'
import AuthLists from './AuthLists'
import { useConvexAuth } from 'convex/react'
import authContext from '../auth/authContext'
import ListsLoading from './ListsLoading'
import publicListsContext from './publicListsContext'
import LayoutPage from '../layout/LayoutPage'
import { HStack } from '@chakra-ui/react'
import { MdPublic } from 'react-icons/md'
import PublicLists from './PublicLists'

export default function Lists (): JSX.Element {
  const auth = useConvexAuth()
  const authData = authContext.data.useMaybe()
  const authQuery = authContext.query.useMaybe()
  const publicListsQuery = publicListsContext.query.use()
  if (auth.isLoading) {
    return <LayoutPage loading />
  }
  if (authQuery.provided && authQuery.value.loading) {
    return <ListsLoading />
  }
  if (!authData.provided) {
    return (
      <LayoutPage
        loading={publicListsQuery.loading}
        title={<HStack><span>Lists</span><MdPublic /></HStack>}
      >
        <PublicLists />
      </LayoutPage>
    )
  }
  return (
    <authListsQueryContext.Provider>
      <AuthLists />
    </authListsQueryContext.Provider>
  )
}
