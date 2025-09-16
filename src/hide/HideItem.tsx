import { MenuItem } from '@chakra-ui/react'
import { JSX } from 'react'
import { PiEyeSlashFill } from 'react-icons/pi'
import authContext from '../auth/authContext'
import listContext from '../list/listContext'
import hideItemContext from './hideItemContext'
import itemContext from '../item/itemContext'

export default function HideItem (): JSX.Element {
  const hideItem = hideItemContext.use()
  const auth = authContext.useMaybe()
  const list = listContext.use()
  const item = itemContext.use()
  if (!auth.provided || list.userId !== auth.value._id) {
    return <></>
  }
  function handleClick (): void {
    void hideItem.act({ itemUid: item.uid })
  }
  return (
    <MenuItem icon={<PiEyeSlashFill />} onClick={handleClick}>
      Hide
    </MenuItem>
  )
}
