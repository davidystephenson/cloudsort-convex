import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import authContext from './authContext'
import renameAuthContext from './renameAuthContext'
import userContext from '../user/userContext'

export default function RenameAuthItem (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const rename = renameAuthContext.use()
  const user = userContext.use()
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
