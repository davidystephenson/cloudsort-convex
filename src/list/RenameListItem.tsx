import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import renameListContext from './renameListContext'
import listContext from './listContext'
import authContext from '../auth/authContext'

export default function RenameListItem (): JSX.Element {
  const auth = authContext.useMaybe()
  const list = listContext.use()
  const rename = renameListContext.use()
  if (rename.active || !auth.provided || list.userId !== auth.value._id) {
    return <></>
  }
  function handleClick (): void {
    rename.activate()
  }
  return (
    <MenuItem icon={<MdEdit />} onClick={handleClick}>
      Rename list
    </MenuItem>
  )
}
