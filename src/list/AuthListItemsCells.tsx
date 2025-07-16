import { JSX } from 'react'
import { FullCellRobe } from 'robes'
import listContext from './listContext'
import { AuthListItems } from './listTypes'
import { Heading } from '@chakra-ui/react'

export default function AuthListItemsCells (props: AuthListItems): JSX.Element {
  void props
  const list = listContext.use()
  return (
    <FullCellRobe>
      <Heading size='sm'>
        Movies ({list.listItems.length})
      </Heading>
    </FullCellRobe>
  )
}
