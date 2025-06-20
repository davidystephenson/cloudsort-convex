import { Td } from '@chakra-ui/react'
import { Doc } from '../../convex/_generated/dataModel'
import { JSX } from 'react'
import listContext from './listContext'
import ListMenu from './ListMenu'
import ClinkRobe from 'clink-robe'
import ListLabel from './ListLabel'

export default function PublicListCells (props: {
  row: Doc<'lists'>
}): JSX.Element {
  const listPath = `/list/${props.row._id}`
  const userPath = `/user/${props.row.userId}`
  return (
    <listContext.Provider doc={props.row}>
      <Td>
        <ClinkRobe to={listPath}>
          <ListLabel />
        </ClinkRobe>
      </Td>
      <Td>
        <ClinkRobe to={userPath}>
          {props.row.userName}
        </ClinkRobe>
      </Td>
      <Td><ListMenu /></Td>
    </listContext.Provider>
  )
}
