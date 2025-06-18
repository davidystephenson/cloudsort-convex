import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import renameAuthContext from './renameAuthContext'

export default function RenameAuthItem (): JSX.Element {
  const rename = renameAuthContext.use()
  function handleClick (): void {
    rename.activate()
  }
  return (
    <MenuItem icon={<MdEdit />} onClick={handleClick}>
      Change username
    </MenuItem>
  )
}
