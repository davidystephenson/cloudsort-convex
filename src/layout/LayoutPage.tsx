import { JSX, ReactNode } from 'react'
import authContext from '../auth/authContext'
import { HStack, Box, Heading, Stack } from '@chakra-ui/react'
import { Reeling } from 'reeling'

export default function LayoutPage (props: {
  title: ReactNode
  children: ReactNode
}): JSX.Element {
  const auth = authContext.use()

  if (auth.convex.isLoading) {
    return (
      <Heading size='lg'>
        <HStack align='start'>
          <Box>
            {props.title}
          </Box>
          <Reeling size='35px' />
        </HStack>
      </Heading>
    )
  }

  return (
    <>
      <Heading size='lg'>
        {props.title}
      </Heading>
      {props.children}
    </>
  )
}
