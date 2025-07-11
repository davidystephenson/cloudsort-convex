import { JSX } from 'react'
import { MenuRobe } from 'robes'
import PrivateListItems from './PrivateListItems'
import ListLinkMenuItem from './ListLinkMenuItem'
import importContext from '../import/importContext'
import ImportMenuItem from '../import/ImportMenuItem'

export default function ListTitleMenu (): JSX.Element {
  return (
    <MenuRobe>
      <ListLinkMenuItem />
      <PrivateListItems>
        <importContext.Provider>
          <ImportMenuItem />
        </importContext.Provider>
      </PrivateListItems>
    </MenuRobe>
  )
}
