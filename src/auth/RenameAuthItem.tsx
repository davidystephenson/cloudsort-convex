import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import authContext from './authContext'
import userIdContext from '../user/userIdContext'
import renameAuthContext from './renameAuthContext'

export default function RenameAuthItem (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const rename = renameAuthContext.use()
  const userId = userIdContext.use()
  if (rename.active || (auth.provided && userId !== auth.value._id)) {
    return <></>
  }
  function handleClick (): void {
    rename.activate()
  }
  return (
    <MenuItem icon={<MdEdit />} onClick={handleClick}>
      Change username
    </MenuItem>
  )
}
