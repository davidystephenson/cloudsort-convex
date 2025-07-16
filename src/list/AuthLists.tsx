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
import getAuthContext from '../auth/getAuthContext'
import UserListsTable from './UserListsTable'
import userContext from '../user/userContext'
import { RelatedUser } from '../user/userTypes'
import renameAuthContext from '../auth/renameAuthContext'

export default function AuthLists (): ReactNode {
  const auth = getAuthContext.query.use()
  const authLists = authListsContext.query.use()
  const publicLists = publicListsContext.query.use()
  if (auth.loading || authLists.loading || publicLists.loading) {
    return <ListsLoading />
  }
  const filtered = publicLists.data.filter((list) => list.userId !== auth.data._id)
  const related: RelatedUser = {
    ...auth.data,
    followed: false,
    follower: false
  }
  return (
    <userContext.Provider user={related}>
      <renameAuthContext.Provider>
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
      </renameAuthContext.Provider>
    </userContext.Provider>
  )
}
