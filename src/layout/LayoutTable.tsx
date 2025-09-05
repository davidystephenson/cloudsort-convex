import { ComponentType, JSX, ReactNode, useState } from 'react'
import { LongRowmanceRobe, ReelingRobe } from 'robes'

export default function LayoutTable <Row> (props: {
  Cells: ComponentType<{ index: number, row: Row }>
  debug?: boolean
  columns: ReactNode[]
  rows: Row[]
  onSearch: (props: { query: string | undefined, row: Row }) => boolean
}): JSX.Element {
  const [query, setQuery] = useState<string>()
  if (props.rows == null) {
    return <ReelingRobe size='20px' />
  }
  if (props.rows.length === 0) {
    return <></>
  }
  function handleSearch (props: { query?: string | undefined }): void {
    setQuery(props.query?.toLowerCase())
  }
  const filtered = props.rows.filter((row) => props.onSearch({ query, row }))
  return (
    <LongRowmanceRobe
      columns={props.columns}
      Cells={props.Cells}
      data={filtered}
      debug={props.debug}
      onSearch={handleSearch}
    />
  )
}
