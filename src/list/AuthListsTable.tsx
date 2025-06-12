import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { JSX } from 'react'
import ListsTable from './ListsTable'

export default function AuthListsTable (): JSX.Element {
  const listsQuery = useQuery(api.lists.getByUser)
  return <ListsTable docs={listsQuery} />
}
