import { JSX } from 'react'
import { ButtonRobe } from 'robes'
import optionContext from './optionContext'
import listContext from '../list/listContext'

export default function Option (): JSX.Element {
  const list = listContext.use()
  const option = optionContext.use()
  const listItem = list.items.find((item) => item.itemUid === option.uid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  return (
    <ButtonRobe>
      [{option.hotkey}]
      &thinsp;
      {listItem.item.label}
    </ButtonRobe>
  )
}
