import { JSX, ReactNode } from 'react'
import authContext from './authContext'
import createListContext from '../list/createListContext'

export default function AuthConsumer (props: {
  children: ReactNode
}): JSX.Element {
  const auth = authContext.query.use()
  if (auth.loading) {
    return <>{props.children}</>
  }
  return (
    <createListContext.Provider>
      {props.children}
    </createListContext.Provider>
  )
}
