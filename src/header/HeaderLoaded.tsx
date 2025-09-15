import { HStack, Heading } from '@chakra-ui/react'
import ClinkRobe from 'clink-robes'
import { JSX, ReactNode } from 'react'
import HeaderAuth from './HeaderAuth'

export default function HeaderLoaded (props: {
  children?: ReactNode
}): JSX.Element {
  return (
    <HStack justifyContent='space-between'>
      <ClinkRobe to='/'>
        <Heading>Cloudsort</Heading>
      </ClinkRobe>
      {props.children}
      <HeaderAuth />
    </HStack>
  )
}
