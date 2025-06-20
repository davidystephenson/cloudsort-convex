import { JSX } from 'react'
import ListsTable from './ListsTable'
import { Doc } from '../../convex/_generated/dataModel'
import UserListCells from './UserListCells'

export default function UserListsTable (props: {
  docs?: Array<Doc<'lists'>>
}): JSX.Element {
  if (props.docs == null || props.docs.length === 0) {
    return <></>
  }
  return (
    <ListsTable
      cells={UserListCells}
      columns={['List', '']}
      docs={props.docs}
    />
  )
}
