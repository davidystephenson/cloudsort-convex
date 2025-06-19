import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdPublicOff } from 'react-icons/md'
import unpublishListContext from './unpublishListContext'

export default function UnpublishListItem (): JSX.Element {
  const unpublishList = unpublishListContext.use()
  function unpublish (): void {
    void unpublishList.act()
  }
  return (
    <MenuItem icon={<MdPublicOff />} onClick={unpublish}>
      Unpublish
    </MenuItem>
  )
}
