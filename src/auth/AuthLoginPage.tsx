import { JSX } from 'react'
import AuthForm from './AuthForm'
import LayoutTitle from '../layout/LayoutPage'

export default function AuthLoginPage (): JSX.Element {
  return (
    <LayoutTitle title='Login'>
      <AuthForm
        flow='signIn'
        label='Login'
      />
    </LayoutTitle>
  )
}
