import { JSX } from 'react'
import listContext from './listContext'
import { MenuItem } from '@chakra-ui/react'
import { MdPublicOff } from 'react-icons/md'

export default function UnpublishListItem (): JSX.Element {
  const list = listContext.use()
  function unpublish (): void {
    void list.unpublish()
  }
  return (
    <MenuItem icon={<MdPublicOff />} onClick={unpublish}>
      Unpublish
    </MenuItem>
  )
}
