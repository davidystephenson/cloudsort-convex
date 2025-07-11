import { Td } from '@chakra-ui/react'
import { JSX } from 'react'
import ListRowMenu from './ListRowMenu'
import ClinkRobe from 'clink-robe'
import ListLabel from './ListLabel'
import listContext from './listContext'
import { RelatedList } from './listTypes'

export default function UserListCells (props: {
  row: RelatedList
}): JSX.Element {
  const path = `/list/${props.row._id}`
  return (
    <listContext.Provider doc={props.row}>
      <Td>
        <ClinkRobe to={path}>
          <ListLabel />
        </ClinkRobe>
      </Td>
      <Td><ListRowMenu /></Td>
    </listContext.Provider>
  )
}
