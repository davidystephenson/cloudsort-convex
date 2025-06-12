import { JSX, ReactNode } from 'react'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import authUserContext from './authUserContext'
import authLoadingContext from './authLoadingContext'

export default function AuthUserController (props: {
  children: ReactNode
}): JSX.Element {
  const user = useQuery(api.users.current)
  if (user == null) {
    return (
      <authLoadingContext.Provider loading>
        {props.children}
      </authLoadingContext.Provider>
    )
  }
  return (
    <authLoadingContext.Provider loading={false}>
      <authUserContext.Provider doc={user}>
        {props.children}
      </authUserContext.Provider>
    </authLoadingContext.Provider>
  )
}
