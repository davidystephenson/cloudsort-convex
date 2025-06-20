import { Box, Heading, HStack } from '@chakra-ui/react'
import { JSX, ReactNode } from 'react'
import LayoutReeling from './LayoutReeling'

export default function LayoutLoading (props: {
  children?: ReactNode
}): JSX.Element {
  return (
    <Heading size='lg'>
      <HStack align='start'>
        <Box>
          {props.children}
        </Box>
        <LayoutReeling />
      </HStack>
    </Heading>
  )
}
