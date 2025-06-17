import { JSX, useState } from 'react'
import { LongRowmanceRobe, ReelingRobe } from 'robes'
import ListCells from './ListCells'
import { ListTableProps } from './listTypes'

export default function ListsTable (props: ListTableProps): JSX.Element {
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
      columns={['Name', '']}
      Cells={ListCells}
      data={filtered}
      filter={filter}
    />
  )
}
