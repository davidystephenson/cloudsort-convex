import { Badge, HStack, Td } from '@chakra-ui/react'
import { JSX } from 'react'
import listItemContext from './listItemContext'
import ClinkRobe from 'clink-robe'
import { RelatedListItem } from './itemTypes'
import listContext from '../list/listContext'
import ListItemMenu from './ListItemMenu'
import { RiExternalLinkLine } from 'react-icons/ri'

export default function ListItemCells (props: {
  row: RelatedListItem
}): JSX.Element {
  const list = listContext.use()
  const imdbPath = `https://imdb.com/title/${props.row.item.uid}`
  const ranks = list.items.map((item) => item.rank)
  const maximum = Math.max(...ranks)
  const score = maximum - props.row.rank
  return (
    <listItemContext.Provider listItem={props.row}>
      <Td>
        <HStack>
          <Badge size='xs'>{props.row.rank}</Badge>
          <ClinkRobe
            _hover={{
              textDecoration: 'underline'
            }}
            isExternal
            to={imdbPath}
          >
            <HStack>
              <span>{props.row.item.label}</span>
              <RiExternalLinkLine />
            </HStack>
          </ClinkRobe>
        </HStack>
      </Td>
      <Td>
        <HStack gap='4px' justifyContent='end'>
          <span>{score}</span>
          <ListItemMenu />
        </HStack>
      </Td>
    </listItemContext.Provider>
  )
}
