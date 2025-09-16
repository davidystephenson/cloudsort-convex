import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdPublicOff } from 'react-icons/md'
import unpublishListContext from './unpublishListContext'
import authContext from '../auth/authContext'

export default function UnpublishListMenuItem (): JSX.Element {
  const auth = authContext.useMaybe()
  if (!auth.provided) {
    return <></>
  }
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
