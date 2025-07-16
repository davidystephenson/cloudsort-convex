import { JSX, ReactNode } from 'react'
import AuthConsumer from './AuthConsumer'
import getAuthContext from './getAuthContext'
import { useConvexAuth } from 'convex/react'

export default function AuthController (props: {
  children: ReactNode
}): JSX.Element {
  const convex = useConvexAuth()
  const unauthed = convex.isLoading || !convex.isAuthenticated
  if (unauthed) {
    return <>{props.children}</>
  }
  return (
    <getAuthContext.Provider>
      <AuthConsumer>
        {props.children}
      </AuthConsumer>
    </getAuthContext.Provider>
  )
}
