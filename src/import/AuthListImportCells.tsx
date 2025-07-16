import { JSX } from 'react'
import { FullCellRobe } from 'robes'
import { AuthListImport } from '../list/listTypes'
import authorizeListContext from '../auth/authorizeListContext'
import { HStack, Link } from '@chakra-ui/react'
import { BsCloudUpload } from 'react-icons/bs'
import authListContext from '../list/authListContext'

export default function AuthListImportCells (props: AuthListImport): JSX.Element {
  const authList = authListContext.use()
  const list = authorizeListContext.data.use()
  const _import = list.imports.find((_import) => _import._id === props.importId)
  if (_import == null) {
    throw new Error('import not found')
  }
  function handleClick (): void {
    if (_import == null) {
      throw new Error('Import not found')
    }
    authList.toggleImport({ importId: _import._id })
  }
  return (
    <FullCellRobe fontWeight='bold'>
      <Link href='#' onClick={handleClick}>
        <HStack>
          <BsCloudUpload />
          <span>{_import.importItems.length}</span>
        </HStack>
      </Link>
    </FullCellRobe>
  )
}
