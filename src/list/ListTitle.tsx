import { JSX } from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import ListMenu from './ListMenu'
import ListLabel from './ListLabel'
import listContext from './listContext'
import { ButtonClinkRobe } from 'clink-robe'

export default function ListTitle (): JSX.Element {
  const list = listContext.use()
  const userPath = `/user/${list.userId}`
  return (
    <HStack justify='space-between'>
      <HStack>
        <Heading size='lg'>
          <ListLabel />
        </Heading>
        <ListMenu />
      </HStack>
      <ButtonClinkRobe to={userPath}>
        {list.user.name}
      </ButtonClinkRobe>
    </HStack>
  )
}
