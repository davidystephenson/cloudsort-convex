import { ReactNode } from 'react'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { Badge, Heading, Stack } from '@chakra-ui/react'
import getAuthContext from '../auth/getAuthContext'
import Header from '../header/Header'

export default function LayoutNotFound (props: {
  id: string
  label: string
}): ReactNode {
  const authUser = getAuthContext.data.useMaybe()
  if (authUser == null) {
    return <AuthLoginButton />
  }
  return (
    <>
      <Header />
      <Stack>
        <Badge fontSize='md' w='fit-content'>{props.id}</Badge>
        <Heading size='md'>{props.label} not found</Heading>
        <ButtonClinkRobe to='/'>
          Lists
        </ButtonClinkRobe>
      </Stack>
    </>
  )
}
