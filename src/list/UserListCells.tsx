import { Td } from '@chakra-ui/react'
import { JSX } from 'react'
import ListRowMenu from './ListRowMenu'
import ClinkRobe from 'clink-robes'
import ListLabel from './ListLabel'
import listContext from './listContext'
import { RelatedList } from './listTypes'
import userContext from '../user/userContext'

export default function UserListCells (props: {
  row: RelatedList
}): JSX.Element {
  const path = `/list/${props.row._id}`
  return (
    <userContext.Provider user={props.row.user}>
      <listContext.Provider list={props.row}>
        <Td>
          <ClinkRobe to={path}>
            <ListLabel />
          </ClinkRobe>
        </Td>
        <Td>
          <ListRowMenu />
        </Td>
      </listContext.Provider>
    </userContext.Provider>
  )
}
