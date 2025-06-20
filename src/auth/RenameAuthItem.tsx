import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import renameAuthContext from './renameAuthContext'
import userContext from '../user/userContext'
import authContext from './authContext'

export default function RenameAuthItem (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const user = userContext.use()
  const rename = renameAuthContext.use()
  if (rename.active || (auth.provided && user._id !== auth.value._id)) {
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
