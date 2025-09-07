import { ReactNode } from 'react'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { Badge, Heading, Stack } from '@chakra-ui/react'
import Header from '../header/Header'
import authContext from '../auth/authContext'

export default function LayoutNotFound (props: {
  id: string
  label: string
}): ReactNode {
  const auth = authContext.useMaybe()
  if (auth == null) {
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
