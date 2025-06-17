import { JSX, ReactNode } from 'react'
import authActionsContext from './authActionsContext'
import authContext from './authContext'

export default function AuthConsumer (props: {
  children: ReactNode
}): JSX.Element {
  const auth = authContext.query.use()
  if (auth.loading) {
    return <>{props.children}</>
  }
  return (
    <authActionsContext.Provider>
      {props.children}
    </authActionsContext.Provider>
  )
}
