import { ReactNode } from 'react'
import authListsQueryContext from './authListsQueryContext'
import CreateListForm from './CreateListForm'
import { Heading, HStack } from '@chakra-ui/react'
import ListsLoading from './ListsLoading'
import LayoutTitle from '../layout/LayoutPage'
import publicListsContext from './publicListsContext'
import userContext from '../user/userContext'
import AuthMenu from '../auth/AuthMenu'
import AuthListsTitle from './AuthListsTitle'
import ListsTable from './ListsTable'
import AuthListsMenu from './AuthListsMenu'
import PublicLists from './PublicLists'
import authContext from '../auth/authContext'

export default function AuthLists (): ReactNode {
  const authLists = authListsQueryContext.use()
  const auth = authContext.data.use()
  const publicLists = publicListsContext.query.use()
  if (authLists === undefined || publicLists.loading) {
    return <ListsLoading />
  }
  return (
    <userContext.Provider doc={auth}>
      <LayoutTitle title={<AuthListsTitle />} menu={<AuthMenu />}>
        <HStack width='100%' height='32px'>
          <Heading size='md'>Lists</Heading>
          <AuthListsMenu />
          <CreateListForm />
        </HStack>
        <ListsTable columns={['Name', '']} docs={authLists} />
        <PublicLists />
      </LayoutTitle>
    </userContext.Provider>
  )
}
