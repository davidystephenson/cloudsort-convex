import { Box, HStack } from '@chakra-ui/react'
import { JSX } from 'react'
import itemContext from './itemContext'
import ListItemHidden from './ListItemHidden'

export default function ItemLabel (): JSX.Element {
  const item = itemContext.use()
  return (
    <HStack>
      <ListItemHidden />
      <Box wordBreak='break-word'>
        {item.label}
      </Box>
    </HStack>
  )
}
