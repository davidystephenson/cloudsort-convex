import { JSX } from 'react'
import { AuthListChoiceItem } from '../list/listTypes'
import { Td } from '@chakra-ui/react'
import listContext from '../list/listContext'
import authorizeListContext from '../auth/authorizeListContext'
import ChoiceIcon from './ChoiceIcon'

export default function AuthListChoiceItemCells (props: AuthListChoiceItem): JSX.Element {
  const authorization = authorizeListContext.data.use()
  const list = listContext.use()
  const choice = authorization.choices.find((choice) => choice._id === props.choiceId)
  if (choice == null) {
    throw new Error('Choice not found')
  }
  const listItem = list.listItems.find((item) => item.item.uid === props.itemUid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  const a = choice.aUid === listItem.item.uid
  const chosen = a ? choice.aChosen : !choice.aChosen
  return (
    <>
      <Td>
        {listItem.item.label}
      </Td>
      <Td>
        <ChoiceIcon chosen={chosen} />
      </Td>
    </>
  )
}
