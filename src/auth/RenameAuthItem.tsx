import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import authUserContext from './authUserContext'

export default function RenameAuthItem (): JSX.Element {
  const authUser = authUserContext.use()
  function handleClick (): void {
    authUser.rename.activate()
  }
  return (
    <MenuItem icon={<MdEdit />} onClick={handleClick}>
      Rename
    </MenuItem>
  )
}
