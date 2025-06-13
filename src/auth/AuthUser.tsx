import { JSX, ReactNode } from 'react'
import authUserContext from './authUserContext'
import authUserQueryContext from './authUserQueryContext'

export default function AuthUser (props: {
  children: ReactNode
}): JSX.Element {
  const user = authUserQueryContext.use()
  if (user.loading) {
    return <>{props.children}</>
  }
  return (
    <authUserContext.Provider data={user.data}>
      {props.children}
    </authUserContext.Provider>
  )
}
