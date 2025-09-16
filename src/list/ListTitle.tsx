import { JSX } from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import ListLabel from './ListLabel'
import ListTitleMenu from './ListTitleMenu'
import renameListContext from './renameListContext'
import RenameListForm from './RenameListForm'
import ClinkRobe from 'clink-robes'
import listContext from './listContext'
import ListUser from './ListUser'
import importContext from '../import/importContext'
import deleteListContext from './deleteListContext'

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
        <Heading size={{ sm: 'lg', md: 'md' }}>
          <ListLabel />
        </Heading>
      </ClinkRobe>
      <ListUser />

      <deleteListContext.Provider args={{ listId: list._id }}>
        <importContext.Provider>
          <ListTitleMenu />
        </importContext.Provider>
      </deleteListContext.Provider>
    </HStack>
  )
}
