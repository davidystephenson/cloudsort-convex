import { ReactNode } from 'react'
import authContext from '../auth/authContext'
import LayoutReeling from '../layout/LayoutReeling'
import UserMenu from './UserMenu'
import userContext from './userContext'

export default function UserPageMenu (): ReactNode {
  const auth = authContext.query.useMaybe()

  if (!auth.provided) {
    return <></>
  }
  if (auth.value.loading) {
    return <LayoutReeling />
  }
  return (
    <userContext.Provider doc={auth.value.data}>
      <UserMenu />
    </userContext.Provider>
  )
}
