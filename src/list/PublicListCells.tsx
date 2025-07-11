import { HStack, Td } from '@chakra-ui/react'
import { JSX } from 'react'
import listContext from './listContext'
import ListRowMenu from './ListRowMenu'
import ClinkRobe from 'clink-robe'
import ListLabel from './ListLabel'
import { RelatedList } from './listTypes'
import UserBadge from '../user/UserBadge'
import userContext from '../user/userContext'

export default function PublicListCells (props: {
  row: RelatedList
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
        <userContext.Provider user={props.row.user}>
          <ClinkRobe to={userPath}>
            <HStack>
              <span>{props.row.user.name}</span>
              <UserBadge />
            </HStack>
          </ClinkRobe>
        </userContext.Provider>
      </Td>
      <Td><ListRowMenu /></Td>
    </listContext.Provider>
  )
}
