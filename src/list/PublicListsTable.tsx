import { JSX } from 'react'
import ListsTable from './ListsTable'
import PublicListCells from './PublicListCells'
import { RelatedList } from './listTypes'

export default function PublicListsTable (props: {
  docs?: RelatedList[]
}): JSX.Element {
  if (props.docs == null || props.docs.length === 0) {
    return <></>
  }
  return (
    <ListsTable
      cells={PublicListCells}
      columns={['List', 'User', '']}
      lists={props.docs}
    />
  )
}
