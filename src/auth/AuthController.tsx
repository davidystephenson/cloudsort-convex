import { JSX, ReactNode } from 'react'
import AuthConsumer from './AuthConsumer'
import authContext from './authContext'
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
    <authContext.Provider>
      <AuthConsumer>
        {props.children}
      </AuthConsumer>
    </authContext.Provider>
  )
}
