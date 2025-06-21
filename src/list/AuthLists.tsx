import { ReactNode } from 'react'
import authListsContext from './authListsContext'
import CreateListForm from './CreateListForm'
import { Heading, HStack } from '@chakra-ui/react'
import ListsLoading from './ListsLoading'
import LayoutTitle from '../layout/LayoutPage'
import publicListsContext from './publicListsContext'
import UserMenu from '../user/UserMenu'
import AuthListsTitle from './AuthListsTitle'
import AuthListsMenu from './AuthListsMenu'
import PublicLists from './PublicLists'
import authContext from '../auth/authContext'
import UserListsTable from './UserListsTable'
import userBaseContext from '../user/userBaseContext'

export default function AuthLists (): ReactNode {
  const auth = authContext.query.use()
  const authLists = authListsContext.query.use()
  const publicLists = publicListsContext.query.use()
  if (auth.loading || authLists.loading || publicLists.loading) {
    return <ListsLoading />
  }
  const filtered = publicLists.data.filter((list) => list.userId !== auth.data._id)
  return (
    <userBaseContext.Provider user={auth.data}>
      <LayoutTitle
        title={<AuthListsTitle />}
        menu={<UserMenu />}
      >
        <HStack width='100%' height='32px'>
          <Heading size='md'>Lists</Heading>
          <AuthListsMenu />
          <CreateListForm />
        </HStack>
        <UserListsTable docs={authLists.data} />
        <PublicLists docs={filtered} />
      </LayoutTitle>
    </userBaseContext.Provider>
  )
}
