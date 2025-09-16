import { JSX } from 'react'
import { AuthListChoiceItem } from '../list/listTypes'
import { HStack, Td } from '@chakra-ui/react'
import ChoiceIcon from './ChoiceIcon'

export default function AuthListChoiceItemCells (props: AuthListChoiceItem): JSX.Element {
  const a = props.episode.aUid === props.listItem.item.uid
  const chosen = a ? props.episode.aChosen : !props.episode.aChosen
  const points = a ? props.episode.aPoints : props.episode.bPoints
  return (
    <>
      <Td>
        {props.listItem.item.label}
      </Td>
      <Td>
        <HStack justifyContent='end'>
          <span>{points}</span>
          <ChoiceIcon chosen={chosen} />
        </HStack>
      </Td>
    </>
  )
}
