import { JSX } from 'react'
import AuthForm from './AuthForm'
import LayoutPage from '../layout/LayoutPage'

export default function AuthLoginPage (): JSX.Element {
  return (
    <LayoutPage title='Login'>
      <AuthForm
        flow='signIn'
        label='Login'
      />
    </LayoutPage>
  )
}
