import { JSX } from 'react'
import { FullCellRobe } from 'robes'
import { AuthListChoice } from '../list/listTypes'
import authorizeListContext from '../auth/authorizeListContext'
import { HStack, Link } from '@chakra-ui/react'
import listContext from '../list/listContext'
import ChoiceLabel from './ChoiceLabel'
import authListContext from '../list/authListContext'

export default function AuthListChoiceCells (props: AuthListChoice): JSX.Element {
  const authList = authListContext.use()
  const authorization = authorizeListContext.data.use()
  const list = listContext.use()
  const choice = authorization.choices.find((choice) => choice._id === props.choiceId)
  if (choice == null) {
    throw new Error('import not found')
  }
  const aListItem = list.listItems.find((listItem) => listItem.item.uid === choice.aUid)
  if (aListItem == null) {
    throw new Error(`List item ${choice.aUid} not found in list`)
  }
  const bListItem = list.listItems.find((listItem) => listItem.item.uid === choice.bUid)
  if (bListItem == null) {
    throw new Error(`List item ${choice.bUid} not found in list`)
  }
  function handleClick (): void {
    if (choice == null) {
      throw new Error('Choice not found')
    }
    authList.toggleChoice({ choiceId: choice._id })
  }
  return (
    <FullCellRobe>
      <Link href='#' onClick={handleClick}>
        <HStack width='100%'>
          <ChoiceLabel chosen={choice.aChosen} label={aListItem.item.label} />
          <ChoiceLabel chosen={!choice.aChosen} label={bListItem.item.label} />
        </HStack>
      </Link>
    </FullCellRobe>
  )
}
