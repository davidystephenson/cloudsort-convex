import { JSX, ReactNode } from 'react'
import authContext from './authContext'
import AuthUserController from './AuthUserController'

export default function AuthConsumer (props: {
  children: ReactNode
}): JSX.Element {
  const auth = authContext.use()
  if (auth.convex.isLoading || !auth.convex.isAuthenticated) {
    return <>{props.children}</>
  }
  return (
    <AuthUserController>
      {props.children}
    </AuthUserController>
  )
}
