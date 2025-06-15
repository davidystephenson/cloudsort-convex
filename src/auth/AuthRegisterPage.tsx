import { JSX } from 'react'
import AuthForm from './AuthForm'
import LayoutTitle from '../layout/LayoutPage'

export default function AuthLoginPage (): JSX.Element {
  return (
    <LayoutTitle title='Register'>
      <AuthForm
        flow='signUp'
        label='Register'
      />
    </LayoutTitle>
  )
}
