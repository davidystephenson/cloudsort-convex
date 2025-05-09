import { HStack } from '@chakra-ui/react'
import ClinkRobe from 'clink-robe'
import { ReactNode } from 'react'

export default function LayoutNavbar (): ReactNode {
  return (
    <HStack>
      <ClinkRobe to='/'>Lists</ClinkRobe>
      <ClinkRobe to='/login'>Login</ClinkRobe>
    </HStack>
  )
}
