import { ReactNode, JSX } from 'react'
import AuthLoginButton from './AuthLoginButton'
import authUserContext from './authUserContext'

export default function AuthContent (props: {
  children: ReactNode
}): JSX.Element {
  const authUser = authUserContext.useMaybe()
  if (authUser == null) {
    return <AuthLoginButton />
  }
  if (authUser.value != null) {
    console.log(authUser.value.data.name)
  }
  return <>{props.children}</>
}
