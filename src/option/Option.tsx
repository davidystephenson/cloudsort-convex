import { JSX } from 'react'
import { ButtonRobe } from 'robes'
import optionContext from './optionContext'
import listContext from '../list/listContext'
import chooseContext from '../choice/chooseContext'

export default function Option (): JSX.Element {
  const choose = chooseContext.use()
  const list = listContext.use()
  const option = optionContext.use()
  const listItem = list.items.find((item) => item.itemUid === option.uid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  function handleClick (): void {
    void choose.act()
  }
  return (
    <ButtonRobe onClick={handleClick}>
      [{option.hotkey}]
      &thinsp;
      {listItem.item.label}
    </ButtonRobe>
  )
}
