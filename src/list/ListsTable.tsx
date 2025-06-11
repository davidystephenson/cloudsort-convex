import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { JSX, useState } from 'react'
import { Reeling } from 'reeling'
import { LongRowmanceRobe } from 'robes'
import ListCells from './ListCells'

export default function ListsTable (): JSX.Element {
  const [query, setQuery] = useState<string>()
  const listsQuery = useQuery(api.lists.getByUser)
  if (listsQuery == null) {
    return <Reeling />
  }
  function filter (props: { query?: string | undefined }): void {
    setQuery(props.query?.toLowerCase())
  }
  const filtered = listsQuery.filter((list) => {
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
