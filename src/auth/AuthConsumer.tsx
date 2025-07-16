import { JSX, ReactNode } from 'react'
import getAuthContext from './getAuthContext'
import createListContext from '../list/createListContext'

export default function AuthConsumer (props: {
  children: ReactNode
}): JSX.Element {
  const auth = getAuthContext.query.use()
  if (auth.loading) {
    return <>{props.children}</>
  }
  return (
    <createListContext.Provider>
      {props.children}
    </createListContext.Provider>
  )
}
