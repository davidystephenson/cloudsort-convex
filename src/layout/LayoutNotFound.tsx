import { ReactNode } from 'react'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { Heading } from '@chakra-ui/react'
import authContext from '../auth/authContext'

export default function LayoutNotFound (props: {
  children: ReactNode
}): ReactNode {
  const authUser = authContext.data.useMaybe()
  if (authUser == null) {
    return <AuthLoginButton />
  }
  return (
    <>
      <Heading size='sm'>{props.children} not found</Heading>
      <ButtonClinkRobe to='/'>
        Lists
      </ButtonClinkRobe>
    </>
  )
}
