import { ComponentType, JSX, ReactNode } from 'react'
import { RelatedUser } from './userTypes'
import LayoutTable from '../layout/LayoutTable'

export default function UsersTable (props: {
  Cells: ComponentType<{ index: number, row: RelatedUser }>
  columns: ReactNode[]
  users: RelatedUser[]
}): JSX.Element {
  return (
    <LayoutTable
      columns={props.columns}
      Cells={props.Cells}
      rows={props.users}
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
