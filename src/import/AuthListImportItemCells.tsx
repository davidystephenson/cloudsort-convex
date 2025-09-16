import { JSX } from 'react'
import { AuthListImportItem } from '../list/listTypes'
import { HStack, Td } from '@chakra-ui/react'
import { BsCloudUpload } from 'react-icons/bs'
import ItemLabel from '../item/ItemLabel'

export default function AuthListImportItemCells (props: AuthListImportItem): JSX.Element {
  return (
    <>
      <Td>
        <ItemLabel>{props.listItem.item.label}</ItemLabel>
      </Td>
      <Td>
        <HStack justifyContent='flex-end'>
          <span>0</span>
          <BsCloudUpload />
        </HStack>
      </Td>
    </>
  )
}
