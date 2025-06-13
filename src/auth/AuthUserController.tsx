import { JSX, ReactNode } from 'react'
import { api } from '../../convex/_generated/api'
import authUserContext from './authUserContext'
import authLoadingContext from './authLoadingContext'
import { useArchedQuery } from '../arched/useArchedQuery'

export default function AuthUserController (props: {
  children: ReactNode
}): JSX.Element {
  const user = useArchedQuery({ query: api.users.current })
  if (user.loading) {
    return (
      <authLoadingContext.Provider loading>
        {props.children}
      </authLoadingContext.Provider>
    )
  }
  return (
    <authLoadingContext.Provider loading={false}>
      <authUserContext.Provider data={user.data}>
        {props.children}
      </authUserContext.Provider>
    </authLoadingContext.Provider>
  )
}
