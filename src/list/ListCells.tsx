import { Td } from '@chakra-ui/react'
import { Doc } from '../../convex/_generated/dataModel'
import { JSX } from 'react'
import listContext from './listContext'
import ListMenu from './ListMenu'

export default function ListCells (props: {
  row: Doc<'lists'>
}): JSX.Element {
  return (
    <listContext.Provider doc={props.row}>
      <Td>{props.row.name}</Td>
      <Td><ListMenu /></Td>
    </listContext.Provider>
  )
}
