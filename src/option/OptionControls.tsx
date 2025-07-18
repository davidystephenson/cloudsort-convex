import { HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import ListItemMenu from '../item/ListItemMenu'
import optionContext from './optionContext'
import { ButtonRobe } from 'robes'
import chooseContext from '../choice/chooseContext'
import listContext from '../list/listContext'

export default function OptionControls (): JSX.Element {
  const choose = chooseContext.use()
  const list = listContext.use()
  const option = optionContext.use()
  const listItem = list.listItems.find((item) => item.itemUid === option.uid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  const first = option.hotkey === 'a'
  function handleClick (): void {
    void choose.act()
  }
  const button = (
    <ButtonRobe onClick={handleClick}>
      [{option.hotkey}]
      &thinsp;
      {listItem.item.label}
    </ButtonRobe>
  )
  if (first) {
    return (
      <HStack>
        <ListItemMenu />
        {button}
      </HStack>
    )
  }
  return (
    <HStack>
      {button}
      <ListItemMenu />
    </HStack>
  )
}
