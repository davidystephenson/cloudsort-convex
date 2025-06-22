import { JSX } from 'react'
import ListsTable from './ListsTable'
import UserListCells from './UserListCells'
import { RelatedList } from './listTypes'

export default function UserListsTable (props: {
  docs?: RelatedList[]
}): JSX.Element {
  if (props.docs == null || props.docs.length === 0) {
    return <></>
  }
  return (
    <ListsTable
      cells={UserListCells}
      columns={['List', '']}
      lists={props.docs}
    />
  )
}
