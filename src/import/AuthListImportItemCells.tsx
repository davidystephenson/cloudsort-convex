import { JSX } from 'react'
import { AuthListImportItem } from '../list/listTypes'
import { HStack, Td } from '@chakra-ui/react'
import { BsCloudUpload } from 'react-icons/bs'
import ItemLabel from '../item/ItemLabel'
import itemContext from '../item/itemContext'

export default function AuthListImportItemCells (props: AuthListImportItem): JSX.Element {
  console.log('props.listItem.item', props.listItem.item)
  return (
    <itemContext.Provider item={props.listItem.item}>
      <Td>
        <ItemLabel />
      </Td>
      <Td>
        <HStack justifyContent='flex-end'>
          <span>0</span>
          <BsCloudUpload />
        </HStack>
      </Td>
    </itemContext.Provider>
  )
}
