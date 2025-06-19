import { ComponentType, JSX, ReactNode, useState } from 'react'
import { LongRowmanceRobe, ReelingRobe } from 'robes'
import { Doc } from '../../convex/_generated/dataModel'

export default function ListsTable (props: {
  cells: ComponentType<{ index: number, row: Doc<'lists'> }>
  columns: ReactNode[]
  docs?: Array<Doc<'lists'>>
}): JSX.Element {
  const [query, setQuery] = useState<string>()
  if (props.docs == null) {
    return <ReelingRobe size='20px' />
  }
  if (props.docs.length === 0) {
    return <></>
  }
  function filter (props: { query?: string | undefined }): void {
    setQuery(props.query?.toLowerCase())
  }
  const filtered = props.docs.filter((list) => {
    if (query == null) {
      return true
    }
    const lowerName = list.name.toLowerCase()
    return lowerName.includes(query)
  })
  return (
    <LongRowmanceRobe
      columns={props.columns}
      Cells={props.cells}
      data={filtered}
      filter={filter}
    />
  )
}
