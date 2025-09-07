import { JSX } from 'react'
import { AuthListChoiceItem } from '../list/listTypes'
import { Td } from '@chakra-ui/react'
import ChoiceIcon from './ChoiceIcon'
import authListContext from '../list/authListContext'

export default function AuthListChoiceItemCells (props: AuthListChoiceItem): JSX.Element {
  const authList = authListContext.use()
  const choice = authList.list.choices.find((choice) => choice._id === props.choiceId)
  if (choice == null) {
    throw new Error('Choice not found')
  }
  const listItem = authList.list.listItems.find((item) => item.item.uid === props.itemUid)
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
