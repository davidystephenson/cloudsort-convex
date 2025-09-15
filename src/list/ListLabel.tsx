import { JSX } from 'react'
import { HStack } from '@chakra-ui/react'
import listContext from './listContext'
import ListLabelPublic from './ListLabelPublic'

export default function ListLabel (): JSX.Element {
  const list = listContext.use()
  return (
    <HStack>
      <span>{list.name}!!!</span>
      <ListLabelPublic />
    </HStack>
  )
}
