import { JSX } from 'react'
import authUserContext from '../auth/authUserContext'
import AuthRenameForm from '../auth/AuthRenameForm'

export default function AuthListsTitle (): JSX.Element {
  const authUser = authUserContext.use()
  if (authUser.rename.active) {
    return <AuthRenameForm />
  }
  return (
    <>
      {authUser.data.name}
    </>
  )
}
