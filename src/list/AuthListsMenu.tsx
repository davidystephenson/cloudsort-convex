import { MenuItem } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdAdd } from 'react-icons/md'
import { MenuRobe } from 'robes'
import authActionsContext from '../auth/authActionsContext'

export default function AuthListsMenu (): JSX.Element {
  const authUser = authActionsContext.use()
  if (authUser.createList.active) {
    return <></>
  }
  function handleCreateList (): void {
    authUser.createList.activate()
  }
  return (
    <MenuRobe>
      <MenuItem
        icon={<MdAdd />}
        onClick={handleCreateList}
      >
        Create List
      </MenuItem>
    </MenuRobe>
  )
}
