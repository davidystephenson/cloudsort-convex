import { JSX, MouseEvent } from 'react'
import { FullCellRobe } from 'robes'
import listContext from './listContext'
import { AuthListItems } from './listTypes'
import { Heading, Link } from '@chakra-ui/react'
import authListContext from './authListContext'

export default function AuthListItemsCells (props: AuthListItems): JSX.Element {
  void props
  const authList = authListContext.use()
  const list = listContext.use()
  function handleClick (event: MouseEvent): void {
    event.preventDefault()
    authList.toggleItems()
  }
  return (
    <FullCellRobe>
      <Heading size='sm'>
        <Link href='#' onClick={handleClick}>
          Movies ({list.listItems.length})
        </Link>
      </Heading>
    </FullCellRobe>
  )
}
