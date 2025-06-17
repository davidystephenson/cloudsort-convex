import { Heading, HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdPublic } from 'react-icons/md'
import ListsTable from './ListsTable'
import publicListsQueryContext from './publicListsQueryContext'
import authContext from '../auth/authContext'

export default function PublicLists (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const publicLists = publicListsQueryContext.data.use()
  const filtered = auth.provided
    ? publicLists.filter((list) => list.userId !== auth.value._id)
    : publicLists
  if (filtered.length === 0) {
    return <></>
  }
  return (
    <>
      <Heading size='md'>
        <HStack><span>Public</span><MdPublic /></HStack>
      </Heading>
      <ListsTable columns={['List', 'User', '']} docs={filtered} />
    </>
  )
}
