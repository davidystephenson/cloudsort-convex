import { HStack, Heading } from '@chakra-ui/react'
import ClinkRobe from 'clink-robes'
import { JSX } from 'react'

export default function Header (props: {
  children?: React.ReactNode
}): JSX.Element {
  return (
    <HStack justifyContent='space-between'>
      <ClinkRobe to='/'>
        <Heading>Cloudsort</Heading>
      </ClinkRobe>
      {props.children}
    </HStack>
  )
}
