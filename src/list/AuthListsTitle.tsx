import { JSX } from 'react'
import AuthRenameForm from '../auth/AuthRenameForm'
import authContext from '../auth/authContext'
import renameAuthContext from '../auth/renameAuthContext'

export default function AuthListsTitle (): JSX.Element {
  const auth = authContext.data.use()
  const rename = renameAuthContext.use()
  if (rename.active) {
    return <AuthRenameForm />
  }
  return <>{auth.name}</>
}
