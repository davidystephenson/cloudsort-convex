import { ReactNode } from 'react'
import authListsQueryContext from './authListsQueryContext'
import CreateListForm from './CreateListForm'
import authUserContext from '../auth/authUserContext'
import { Heading, HStack } from '@chakra-ui/react'
import ListsTable from './ListsTable'
import ListsLoading from './ListsLoading'
import LayoutTitle from '../layout/LayoutPage'
import publicListsQueryContext from './publicListsQueryContext'
import { MdPublic } from 'react-icons/md'

export default function AuthLists (): ReactNode {
  const authLists = authListsQueryContext.use()
  const authUser = authUserContext.use()
  const publicLists = publicListsQueryContext.use()
  if (authLists === undefined || publicLists === undefined) {
    return <ListsLoading />
  }
  const filtered = publicLists.filter((list) => list.userId !== authUser._id)
  return (
    <LayoutTitle title='Lists'>
      <CreateListForm />
      <Heading size='md'>{authUser.email}</Heading>
      <ListsTable docs={authLists} />
      <Heading size='md'>
        <HStack>
          <span>Public</span>
          <MdPublic />
        </HStack>
      </Heading>
      <ListsTable docs={filtered} />
    </LayoutTitle>
  )
}
