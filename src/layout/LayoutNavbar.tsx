import { HStack, Heading } from '@chakra-ui/react'
import { JSX } from 'react'
import ClinkRobe from 'clink-robe'
import LayoutAuth from './LayoutAuth'

export default function NavbarRobe (): JSX.Element {
  return (
    <HStack justifyContent='space-between'>
      <ClinkRobe href='/lists'>
        <Heading>Cloudsort</Heading>
      </ClinkRobe>
      <ClinkRobe to='/'>Lists</ClinkRobe>
      <LayoutAuth />
    </HStack>
  )
}
