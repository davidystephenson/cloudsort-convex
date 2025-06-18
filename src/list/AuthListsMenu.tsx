import { MenuItem } from '@chakra-ui/react'
import { JSX } from 'react'
import { MdAdd } from 'react-icons/md'
import { MenuRobe } from 'robes'
import createListContext from './createListContext'

export default function AuthListsMenu (): JSX.Element {
  const createList = createListContext.use()
  if (createList.active) {
    return <></>
  }
  function handleCreateList (): void {
    createList.activate()
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
