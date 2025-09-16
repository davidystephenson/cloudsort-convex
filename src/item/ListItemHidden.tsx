import { PiEyeSlashFill } from 'react-icons/pi'
import hidesContext from '../hide/hidesContext'
import itemContext from './itemContext'
import { JSX } from 'react'

export default function ListItemHidden (): JSX.Element {
  const hides = hidesContext.useMaybe()
  const item = itemContext.use()
  if (!hides.provided) {
    return <></>
  }
  const hidden = hides.value.some(hide => hide.itemUid === item.uid)
  if (!hidden) {
    return <></>
  }
  return <PiEyeSlashFill />
}
