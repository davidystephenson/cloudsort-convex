import { ReactNode } from 'react'
import authListsContext from './authListsContext'
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
import AuthListCells from './AuthListCells'

export default function AuthLists (): ReactNode {
  const auth = authContext.query.use()
  const authLists = authListsContext.query.use()
  const publicLists = publicListsContext.query.use()
  if (auth.loading || authLists.loading || publicLists.loading) {
    return <ListsLoading />
  }
  return (
    <userContext.Provider doc={auth.data}>
      <LayoutTitle title={<AuthListsTitle />} menu={<AuthMenu />}>
        <HStack width='100%' height='32px'>
          <Heading size='md'>Lists</Heading>
          <AuthListsMenu />
          <CreateListForm />
        </HStack>
        <ListsTable
          cells={AuthListCells}
          columns={['Name', '']}
          docs={authLists.data}
        />
        <PublicLists />
      </LayoutTitle>
    </userContext.Provider>
  )
}
