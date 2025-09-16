import { JSX } from 'react'
import { MenuRobe } from 'robes'
import PrivateListItems from './PrivateListItems'
import ListLinkMenuItems from './ListLinkMenuItems'
import importContext from '../import/importContext'
import ImportMenuItem from '../import/ImportMenuItem'
import RenameListItem from './RenameListItem'
import renameListContext from './renameListContext'
import deleteListContext from './deleteListContext'

export default function ListTitleMenu (): JSX.Element {
  const _delete = deleteListContext.use()
  const _import = importContext.use()
  const rename = renameListContext.use()
  const loading = _delete.acting || rename.acting || _import.acting
  return (
    <MenuRobe loading={loading}>
      <ListLinkMenuItems />
      <PrivateListItems>
        <RenameListItem />
        <importContext.Provider>
          <ImportMenuItem />
        </importContext.Provider>
      </PrivateListItems>
    </MenuRobe>
  )
}
