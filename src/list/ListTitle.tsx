import { JSX } from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import ListLabel from './ListLabel'
import ListTitleMenu from './ListTitleMenu'
import renameListContext from './renameListContext'
import RenameListForm from './RenameListForm'

export default function ListTitle (): JSX.Element {
  const renameList = renameListContext.use()
  if (renameList.active) {
    return <RenameListForm />
  }
  return (
    <HStack>
      <Heading size='lg'>
        <ListLabel />
      </Heading>
      <ListTitleMenu />
    </HStack>
  )
}
