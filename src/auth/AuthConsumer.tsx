import { JSX, ReactNode } from 'react'
import authContext from './authContext'
import AuthUserController from './AuthUserController'
import authLoadingContext from './authLoadingContext'

export default function AuthConsumer (props: {
  children: ReactNode
}): JSX.Element {
  const auth = authContext.use()
  if (auth.convex.isLoading) {
    return (
      <authLoadingContext.Provider loading>
        {props.children}
      </authLoadingContext.Provider>
    )
  }
  if (!auth.convex.isAuthenticated) {
    return (
      <authLoadingContext.Provider loading={false}>
        {props.children}
      </authLoadingContext.Provider>
    )
  }
  return (
    <AuthUserController>
      {props.children}
    </AuthUserController>
  )
}
