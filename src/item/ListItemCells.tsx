import { Badge, HStack, Td } from '@chakra-ui/react'
import { JSX } from 'react'
import listItemContext from './listItemContext'
import ClinkRobe from 'clink-robes'
import { RelatedListItem } from './itemTypes'
import ListItemMenu from './ListItemMenu'
import { RiExternalLinkLine } from 'react-icons/ri'
import useItemPoints from './useItemPoints'
import ItemLabel from './ItemLabel'

export default function ListItemCells (props: {
  row: RelatedListItem
}): JSX.Element {
  const url = `https://imdb.com/title/${props.row.item.uid}`
  const points = useItemPoints({ rank: props.row.rank })
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
            to={url}
          >
            <HStack>
              <ItemLabel>{props.row.item.label}</ItemLabel>
              <RiExternalLinkLine />
            </HStack>
          </ClinkRobe>
        </HStack>
      </Td>
      <Td>
        <HStack gap='4px' justifyContent='end'>
          <span>{points}</span>
          <ListItemMenu />
        </HStack>
      </Td>
    </listItemContext.Provider>
  )
}
