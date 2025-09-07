import { JSX, ReactNode } from 'react'
import { RelatedUser } from '../user/userTypes'
import userContext from '../user/userContext'
import authContext from './authContext'

export default function AuthController (props: {
  auth?: RelatedUser
  children: ReactNode
}): JSX.Element {
  if (props.auth == null) {
    return <>{props.children}</>
  }
  return (
    <authContext.Provider user={props.auth}>
      <userContext.Provider user={props.auth}>
        {props.children}
      </userContext.Provider>
    </authContext.Provider>
  )
}
