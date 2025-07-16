import { JSX } from 'react'
import { AuthListImportItem } from '../list/listTypes'
import { Td } from '@chakra-ui/react'
import { BsCloudUpload } from 'react-icons/bs'
import listContext from '../list/listContext'

export default function AuthListImportItemCells (props: AuthListImportItem): JSX.Element {
  const list = listContext.use()
  const listItem = list.listItems.find((item) => item.item.uid === props.itemUid)
  if (listItem == null) {
    throw new Error('List item not found')
  }
  return (
    <>
      <Td>
        {listItem.item.label}
      </Td>
      <Td>
        <BsCloudUpload />
      </Td>
    </>
  )
}
