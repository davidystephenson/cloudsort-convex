import { Heading } from '@chakra-ui/react'
import { JSX } from 'react'
import authUserContext from '../auth/authUserContext'
import { api } from '../../convex/_generated/api'
import { useQuery } from 'convex/react'
import ListsTable from './ListsTable'

export default function PublicLists (): JSX.Element {
  const authUser = authUserContext.use()
  const listsQuery = useQuery(api.lists.getPublic)
  const filtered = listsQuery?.filter((list) => list.userId !== authUser.doc._id)
  if (filtered == null || filtered.length === 0) {
    return <></>
  }
  return (
    <>
      <Heading size='md'>Public</Heading>
      <ListsTable docs={filtered} />
    </>
  )
}
