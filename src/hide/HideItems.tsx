import { JSX } from 'react'
import authContext from '../auth/authContext'
import listContext from '../list/listContext'
import itemContext from '../item/itemContext'
import hidesContext from './hidesContext'
import UnhideItem from './UnhideItem'
import HideItem from './HideItem'

export default function HideItems (): JSX.Element {
  const auth = authContext.useMaybe()
  const hides = hidesContext.useMaybe()
  const item = itemContext.use()
  const list = listContext.use()
  if (!hides.provided || !auth.provided || list.userId !== auth.value._id) {
    return <></>
  }
  const hidden = hides.value.some(hide => hide.itemUid === item.uid)
  if (hidden) {
    return <UnhideItem />
  }
  return <HideItem />
}
