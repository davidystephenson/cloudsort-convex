import { JSX } from 'react'
import ListsTable from './ListsTable'
import PublicListCells from './PublicLIstCells'
import { Doc } from '../../convex/_generated/dataModel'

export default function PublicListsTable (props: {
  docs?: Array<Doc<'lists'>>
}): JSX.Element {
  if (props.docs == null || props.docs.length === 0) {
    return <></>
  }
  return (
    <ListsTable
      cells={PublicListCells}
      columns={['List', 'User', '']}
      docs={props.docs}
    />
  )
}
