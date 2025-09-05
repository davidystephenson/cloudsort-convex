import { ComponentType, JSX, ReactNode } from 'react'
import { RelatedList } from './listTypes'
import LayoutTable from '../layout/LayoutTable'

export default function ListsTable (props: {
  cells: ComponentType<{ index: number, row: RelatedList }>
  columns: ReactNode[]
  debug?: boolean
  lists: RelatedList[]
}): JSX.Element {
  return (
    <LayoutTable
      columns={props.columns}
      Cells={props.cells}
      debug={props.debug}
      rows={props.lists}
      onSearch={(props) => {
        if (props.query == null) {
          return true
        }
        const lowerName = props.row.name.toLowerCase()
        return lowerName.includes(props.query)
      }}
    />
  )
}
