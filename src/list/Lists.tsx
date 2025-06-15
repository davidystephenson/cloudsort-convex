import { JSX } from 'react'
import authUserContext from '../auth/authUserContext'
import LayoutPage from '../layout/LayoutPage'
import authListsQueryContext from './authListsQueryContext'
import AuthLists from './AuthLists'
import { useConvexAuth } from 'convex/react'
import authUserQueryContext from '../auth/authUserQueryContext'
import ListsLoading from './ListsLoading'

export default function Lists (): JSX.Element {
  const auth = useConvexAuth()
  const authUser = authUserContext.useMaybe()
  const authUserQuery = authUserQueryContext.useMaybe()
  // const publicListsQuery = publicListsQueryContext.use()
  if (auth.isLoading) {
    return <LayoutPage loading />
  }
  if (authUserQuery?.loading === true) {
    return <ListsLoading />
  }
  if (authUser == null) {
    return (
      <>test</>
      // <LayoutPage loading={publicListsQuery == null} title='Public Lists'>
      //   <ListsTable docs={publicListsQuery} />
      // </LayoutPage>
    )
  }
  return (
    <authListsQueryContext.Provider>
      <AuthLists />
    </authListsQueryContext.Provider>
  )
}
