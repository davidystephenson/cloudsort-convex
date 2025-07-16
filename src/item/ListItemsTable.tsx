import { JSX } from 'react'
import LayoutTable from '../layout/LayoutTable'
import { RelatedListItem } from './itemTypes'
import ListItemCells from './ListItemCells'
import filterListItem from './filterListItem'

export default function ListItemsTable (props: {
  listItems: RelatedListItem[]
}): JSX.Element {
  return (
    <LayoutTable
      columns={[`Movies (${props.listItems.length})`, 'Points']}
      Cells={ListItemCells}
      rows={props.listItems}
      filter={(props) => {
        return filterListItem({
          item: props.row.item,
          query: props.query
        })
      }}
    />
  )
}
