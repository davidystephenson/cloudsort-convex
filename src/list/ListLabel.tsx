import { JSX } from 'react'
import { HStack } from '@chakra-ui/react'
import listContext from './listContext'
import ListLabelPublic from './ListLabelPublic'

export default function ListTitle (): JSX.Element {
  const list = listContext.use()
  return (
    <HStack>
      <span>{list.doc.name}</span>
      <ListLabelPublic />
    </HStack>
  )
}
