import { JSX, ReactNode } from 'react'
import AuthUser from './AuthUser'
import authUserQueryContext from './authUserQueryContext'
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
    <authUserQueryContext.Provider>
      <AuthUser>
        {props.children}
      </AuthUser>
    </authUserQueryContext.Provider>
  )
}
