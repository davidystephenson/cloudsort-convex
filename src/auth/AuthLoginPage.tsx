import { JSX } from 'react'
import AuthForm from './AuthForm'
import { Heading } from '@chakra-ui/react'

export default function AuthLoginPage (): JSX.Element {
  return (
    <>
      <Heading size='lg'>Login</Heading>
      <AuthForm
        flow='signIn'
        label='Login'
      />
    </>
  )
}
