import { Td } from '@chakra-ui/react'
import { Doc } from '../../convex/_generated/dataModel'
import { JSX } from 'react'
import listContext from './listContext'
import ListMenu from './ListMenu'
import ClinkRobe from 'clink-robe'

export default function ListCells (props: {
  row: Doc<'lists'>
}): JSX.Element {
  const path = `/list/${props.row._id}`
  return (
    <listContext.Provider doc={props.row}>
      <Td>
        <ClinkRobe to={path}>
          {props.row.name}
        </ClinkRobe>
      </Td>
      <Td><ListMenu /></Td>
    </listContext.Provider>
  )
}
