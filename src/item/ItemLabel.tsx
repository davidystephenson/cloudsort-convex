import { Box } from '@chakra-ui/react'
import { JSX, ReactNode } from 'react'

export default function ItemLabel (props: {
  children: ReactNode
}): JSX.Element {
  return (
    <Box wordBreak='break-word'>
      {props.children}
    </Box>
  )
}
