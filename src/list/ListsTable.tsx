import { ComponentType, JSX, ReactNode } from 'react'
import { RelatedList } from './listTypes'
import LayoutTable from '../layout/LayoutTable'

export default function ListsTable (props: {
  cells: ComponentType<{ index: number, row: RelatedList }>
  columns: ReactNode[]
  lists: RelatedList[]
}): JSX.Element {
  return (
    <LayoutTable
      columns={props.columns}
      Cells={props.cells}
      rows={props.lists}
      filter={(props) => {
        if (props.query == null) {
          return true
        }
        const lowerName = props.row.name.toLowerCase()
        return lowerName.includes(props.query)
      }}
    />
  )
}
