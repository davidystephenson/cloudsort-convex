import { JSX } from 'react'
import { MenuRobe } from 'robes'
import PrivateListItems from './PrivateListItems'
import ListLinkMenuItem from './ListLinkMenuItem'
import importContext from '../import/importContext'
import ImportMenuItem from '../import/ImportMenuItem'
import RenameListItem from './RenameListItem'

export default function ListTitleMenu (): JSX.Element {
  return (
    <MenuRobe>
      <ListLinkMenuItem />
      <PrivateListItems>
        <RenameListItem />
        <importContext.Provider>
          <ImportMenuItem />
        </importContext.Provider>
      </PrivateListItems>
    </MenuRobe>
  )
}
