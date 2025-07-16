import { Td } from '@chakra-ui/react'
import { JSX } from 'react'
import listItemContext from './listItemContext'
import ClinkRobe from 'clink-robe'
import { RelatedListItem } from './itemTypes'
import listContext from '../list/listContext'
import ListItemMenu from './ListItemMenu'

export default function ListItemPercent (props: {
  row: RelatedListItem
}): JSX.Element {
  const list = listContext.use()
  const imdbPath = `https://imdb.com/${props.row.item.uid}`
  const percent = Math.round((props.row.rank / list.listItems.length) * 100)
  return (
    <listItemContext.Provider listItem={props.row}>
      <Td>
        <ClinkRobe to={imdbPath} isExternal>
          {props.row.item.label}
        </ClinkRobe>
      </Td>
      <Td>{percent}%</Td>
      <Td><ListItemMenu /></Td>
    </listItemContext.Provider>
  )
}
