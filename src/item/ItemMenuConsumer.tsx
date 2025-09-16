import { JSX } from 'react'
import { MenuRobe } from 'robes'
import hideItemContext from '../hide/hideItemContext'
import HideItems from '../hide/HideItems'

export default function ItemMenuConsumer (): JSX.Element {
  const hideItem = hideItemContext.use()
  const unhideItem = hideItemContext.use()
  const loading = hideItem.acting || unhideItem.acting
  return (
    <MenuRobe loading={loading}>
      <HideItems />
    </MenuRobe>
  )
}
