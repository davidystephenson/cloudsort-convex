import { HStack } from '@chakra-ui/react'
import { ButtonClinkRobe } from 'clink-robe'
import { JSX } from 'react'
import ListTitle from './ListTitle'
import listContext from './listContext'
import renameListContext from './renameListContext'

export default function ListHeader (): JSX.Element {
  const list = listContext.use()
  const userPath = `/user/${list.userId}`
  return (
    <HStack justify='space-between'>
      <renameListContext.Provider>
        <ListTitle />
      </renameListContext.Provider>
      <ButtonClinkRobe to={userPath}>
        {list.user.name}
      </ButtonClinkRobe>
    </HStack>
  )
}
