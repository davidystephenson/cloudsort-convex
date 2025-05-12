import { JSX } from 'react'
import AuthForm from './AuthForm'
import LayoutPage from '../layout/LayoutPage'

export default function AuthLoginPage (): JSX.Element {
  return (
    <LayoutPage title='Register'>
      <AuthForm
        flow='signUp'
        label='Register'
      />
    </LayoutPage>
  )
}
