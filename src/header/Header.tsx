import { HStack, Heading } from '@chakra-ui/react'
import ClinkRobe from 'clink-robe'
import { JSX } from 'react'
import { Doc } from '../../convex/_generated/dataModel'
import headerContext from './headerContext'
import HeaderAuth from './HeaderAuth'

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
        <HeaderAuth />
      </HStack>
    </headerContext.Provider>
  )
}
