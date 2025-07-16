import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import renameListContext from './renameListContext'
import getAuthContext from '../auth/getAuthContext'
import listContext from './listContext'

export default function RenameListItem (): JSX.Element {
  const auth = getAuthContext.data.useMaybe()
  const list = listContext.use()
  const rename = renameListContext.use()
  if (rename.active || (auth.provided && list.userId !== auth.value._id)) {
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
