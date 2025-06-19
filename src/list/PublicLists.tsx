import { Heading, HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdPublic } from 'react-icons/md'
import ListsTable from './ListsTable'
import publicListsContext from './publicListsContext'
import authContext from '../auth/authContext'
import PublicListCells from './PublicLIstCells'

export default function PublicLists (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const publicLists = publicListsContext.data.use()
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
      <ListsTable
        cells={PublicListCells}
        columns={['List', 'User', '']}
        docs={filtered}
      />
    </>
  )
}
