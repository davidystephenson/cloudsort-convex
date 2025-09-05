import { HStack, Heading } from '@chakra-ui/react'
import ClinkRobe from 'clink-robe'
import { JSX } from 'react'
import LayoutAuth from '../layout/LayoutAuth'
import { Doc } from '../../convex/_generated/dataModel'
import headerContext from './headerContext'

export default function Header (props: {
  loading?: boolean
  user?: Doc<'users'>
}): JSX.Element {
  return (
    <headerContext.Provider {...props}>
      <HStack justifyContent='space-between'>
        <ClinkRobe to='/'>
          <Heading>Cloudsort</Heading>
        </ClinkRobe>
        <LayoutAuth />
      </HStack>
    </headerContext.Provider>
  )
}
