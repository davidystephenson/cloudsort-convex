import { JSX } from 'react'
import AuthForm from './AuthForm'
import { Heading } from '@chakra-ui/react'

export default function AuthLoginPage (): JSX.Element {
  return (
    <>
      <Heading size='lg'>Register</Heading>
      <AuthForm
        flow='signUp'
        label='Register'
      />
    </>
  )
}
