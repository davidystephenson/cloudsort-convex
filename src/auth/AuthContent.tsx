import { JSX, ReactNode } from 'react'
import authContext from './authContext'
import { ButtonClinkRobe } from 'clink-robe'

export default function AuthContent (props: {
  children: ReactNode
}): JSX.Element {
  const auth = authContext.use()
  if (!auth.convex.isAuthenticated) {
    return (
      <ButtonClinkRobe to='/login'>
        Login
      </ButtonClinkRobe>
    )
  }
  return <>{props.children}</>
}
