import { JSX } from 'react'
import { MenuItem } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import authContext from './authContext'
import renameAuthContext from './renameAuthContext'
import userBaseContext from '../user/userBaseContext'

export default function RenameAuthItem (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const rename = renameAuthContext.use()
  const userBase = userBaseContext.use()
  if (rename.active || (auth.provided && userBase._id !== auth.value._id)) {
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
