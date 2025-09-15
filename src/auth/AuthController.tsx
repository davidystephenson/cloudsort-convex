import { JSX, ReactNode, useEffect, useState } from 'react'
import { RelatedUser } from '../user/userTypes'
import userContext from '../user/userContext'
import authContext from './authContext'
import { useAuthActions } from '@convex-dev/auth/react'

export default function AuthController (props: {
  auth?: RelatedUser
  children: ReactNode
}): JSX.Element {
  const [old, setOld] = useState(props.auth)
  const authActions = useAuthActions()
  useEffect(() => {
    if (props.auth !== old) {
      setOld(props.auth)
    }
    if (props.auth == null && old != null) {
      void authActions.signOut()
    }
  }, [props.auth, old])
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
