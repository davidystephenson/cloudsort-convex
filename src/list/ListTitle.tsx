import { JSX } from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import ListMenu from './ListMenu'
import ListLabel from './ListLabel'

export default function ListTitle (): JSX.Element {
  return (
    <HStack>
      <Heading size='lg'>
        <ListLabel />
      </Heading>
      <ListMenu />
    </HStack>
  )
}
