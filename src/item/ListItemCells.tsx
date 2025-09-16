import { Badge, HStack, Td } from '@chakra-ui/react'
import { JSX } from 'react'
import itemContext from './itemContext'
import ClinkRobe from 'clink-robes'
import { RelatedListItem } from './itemTypes'
import ItemMenu from './ItemMenu'
import { RiExternalLinkLine } from 'react-icons/ri'
import useItemPoints from './useItemPoints'
import ItemLabel from './ItemLabel'

export default function ListItemCells (props: {
  row: RelatedListItem
}): JSX.Element {
  const url = `https://imdb.com/title/${props.row.item.uid}`
  const points = useItemPoints({ rank: props.row.rank })
  return (
    <itemContext.Provider item={props.row.item}>
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
              <ItemLabel />
              <RiExternalLinkLine />
            </HStack>
          </ClinkRobe>
        </HStack>
      </Td>
      <Td>
        <HStack gap='4px' justifyContent='end'>
          <span>{points}</span>
          <ItemMenu />
        </HStack>
      </Td>
    </itemContext.Provider>
  )
}
