import { JSX } from 'react'
import AuthRenameForm from '../auth/AuthRenameForm'
import getAuthContext from '../auth/getAuthContext'
import renameAuthContext from '../auth/renameAuthContext'

export default function AuthListsTitle (): JSX.Element {
  const auth = getAuthContext.data.use()
  const rename = renameAuthContext.use()
  if (rename.active) {
    return <AuthRenameForm />
  }
  return <>{auth.name}</>
}
