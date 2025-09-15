import { JSX } from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import ListLabel from './ListLabel'
import ListTitleMenu from './ListTitleMenu'
import renameListContext from './renameListContext'
import RenameListForm from './RenameListForm'
import ClinkRobe from 'clink-robes'
import listContext from './listContext'
import ListUser from './ListUser'

export default function ListTitle (): JSX.Element {
  const list = listContext.use()
  const renameList = renameListContext.use()
  if (renameList.active) {
    return <RenameListForm />
  }
  const listPath = `/list/${list._id}`
  return (
    <HStack>
      <ClinkRobe to={listPath}>
        <Heading size='lg'>
          <ListLabel />
        </Heading>
      </ClinkRobe>
      <ListUser />
      <ListTitleMenu />
    </HStack>
  )
}
