import { JSX, ReactNode } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { ReelingRobe } from 'robes'

export default function LayoutTitle (props: {
  menu?: ReactNode
  title?: ReactNode
  loading?: boolean
}): JSX.Element {
  if (props.loading === true) {
    return (
      <Heading size='lg'>
        <HStack align='start'>
          <Box>
            {props.title}
          </Box>
          <ReelingRobe size='35px' />
        </HStack>
      </Heading>
    )
  }

  return (
    <>
      <HStack height='36px'>
        <Heading size='lg'>
          {props.title}
        </Heading>
        {props.menu}
      </HStack>
    </>
  )
}
