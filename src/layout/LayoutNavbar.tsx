import { HStack, Heading } from '@chakra-ui/react'
import { JSX } from 'react'
import ClinkRobe from 'clink-robe'
import LayoutAuth from './LayoutAuth'

export default function NavbarRobe (): JSX.Element {
  return (
    <HStack justifyContent='space-between'>
      <ClinkRobe href='/'>
        <Heading>Cloudsort</Heading>
      </ClinkRobe>
      <LayoutAuth />
    </HStack>
  )
}
