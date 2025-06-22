import { ComponentType, JSX, ReactNode, useState } from 'react'
import { LongRowmanceRobe, ReelingRobe } from 'robes'

export default function LayoutTable <Row> (props: {
  Cells: ComponentType<{ index: number, row: Row }>
  columns: ReactNode[]
  rows: Row[]
  filter: (props: { query: string | undefined, row: Row }) => boolean
}): JSX.Element {
  const [query, setQuery] = useState<string>()
  if (props.rows == null) {
    return <ReelingRobe size='20px' />
  }
  if (props.rows.length === 0) {
    return <></>
  }
  function filter (props: { query?: string | undefined }): void {
    setQuery(props.query?.toLowerCase())
  }
  const filtered = props.rows.filter((row) => props.filter({ query, row }))
  return (
    <LongRowmanceRobe
      columns={props.columns}
      Cells={props.Cells}
      data={filtered}
      filter={filter}
    />
  )
}
