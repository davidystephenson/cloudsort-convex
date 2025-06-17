import { JSX, ReactNode } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import useAuthLoading from '../auth/useAuthLoading'
import { ReelingRobe } from 'robes'

export default function LayoutPage (props: {
  menu?: ReactNode
  title?: ReactNode
} & (
  { loading?: boolean, children?: ReactNode } |
  { loading: true }
)): JSX.Element {
  const authLoading = useAuthLoading()
  const loading = props.loading === true || authLoading
  if (loading) {
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
      <HStack>
        <Heading size='lg'>
          {props.title}
        </Heading>
        {props.menu}
      </HStack>
      {props.children}
    </>
  )
}
