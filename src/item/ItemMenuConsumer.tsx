import { JSX } from 'react'
import { MenuRobe, ReelingRobe } from 'robes'
import hideItemContext from '../hide/hideItemContext'
import HideItem from '../hide/HideItem'

export default function ItemMenuConsumer (): JSX.Element {
  const hideItem = hideItemContext.use()
  if (hideItem.acting) {
    return <ReelingRobe />
  }
  return (
    <MenuRobe>
      <HideItem />
    </MenuRobe>
  )
}
