import { JSX, ReactNode } from 'react'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import authUserContext from './authUserContext'

export default function AuthUserController (props: {
  children: ReactNode
}): JSX.Element {
  const user = useQuery(api.users.current)
  if (user == null) {
    return <>{props.children}</>
  }
  return (
    <authUserContext.Provider doc={user}>
      {props.children}
    </authUserContext.Provider>
  )
}
