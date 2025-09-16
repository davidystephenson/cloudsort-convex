import { MenuItem } from '@chakra-ui/react'
import { JSX } from 'react'
import { PiEyeFill } from 'react-icons/pi'
import itemContext from '../item/itemContext'
import unhideItemContext from './unhideItemContext'

export default function HideItem (): JSX.Element {
  const unhideItem = unhideItemContext.use()
  const item = itemContext.use()
  function handleClick (): void {
    void unhideItem.act({ itemUid: item.uid })
  }
  return (
    <MenuItem icon={<PiEyeFill />} onClick={handleClick}>
      Unhide
    </MenuItem>
  )
}
