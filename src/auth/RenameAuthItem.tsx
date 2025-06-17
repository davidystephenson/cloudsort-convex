import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import authActionsContext from './authActionsContext'

export default function RenameAuthItem (): JSX.Element {
  const authUser = authActionsContext.use()
  function handleClick (): void {
    authUser.rename.activate()
  }
  return (
    <MenuItem icon={<MdEdit />} onClick={handleClick}>
      Change username
    </MenuItem>
  )
}
