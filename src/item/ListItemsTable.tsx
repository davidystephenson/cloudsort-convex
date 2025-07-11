import { JSX } from 'react'
import LayoutTable from '../layout/LayoutTable'
import { RelatedListItem } from './itemTypes'
import ListItemCells from './ListItemCells'

export default function ListItemsTable (props: {
  listItems: RelatedListItem[]
}): JSX.Element {
  return (
    <LayoutTable
      columns={['Movie', 'Score', 'Actions']}
      Cells={ListItemCells}
      rows={props.listItems}
      filter={(props) => {
        if (props.query == null) {
          return true
        }
        const lowerUid = props.row.item.uid.toLowerCase()
        if (lowerUid.includes(props.query)) {
          return true
        }
        const lowerLabel = props.row.item.label.toLowerCase()
        return lowerLabel.includes(props.query)
      }}
    />
  )
}
