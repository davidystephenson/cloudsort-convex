import { ReactNode } from 'react'
import authListsQueryContext from './authListsQueryContext'
import CreateListForm from './CreateListForm'
import authUserContext from '../auth/authUserContext'
import { Heading, HStack } from '@chakra-ui/react'
import ListsLoading from './ListsLoading'
import LayoutTitle from '../layout/LayoutPage'
import publicListsQueryContext from './publicListsQueryContext'
import { MdPublic } from 'react-icons/md'
import ListsSection from './ListsSection'
import userContext from '../user/userContext'
import AuthMenu from '../auth/AuthMenu'
import AuthListsTitle from './AuthListsTitle'
import ListsTable from './ListsTable'

export default function AuthLists (): ReactNode {
  const authLists = authListsQueryContext.use()
  const authUser = authUserContext.use()
  const publicLists = publicListsQueryContext.use()
  if (authLists === undefined || publicLists === undefined) {
    return <ListsLoading />
  }
  const publicTitle = <HStack><span>Public</span><MdPublic /></HStack>
  const filtered = publicLists.filter((list) => list.userId !== authUser.data._id)
  return (
    <userContext.Provider doc={authUser.data}>
      <LayoutTitle title={<AuthListsTitle />} menu={<AuthMenu />}>
        <CreateListForm />
        <Heading size='md'>Lists</Heading>
        <ListsTable docs={authLists} />
        <ListsSection title={publicTitle} docs={filtered} />
      </LayoutTitle>
    </userContext.Provider>
  )
}
