import { JSX } from 'react'
import AuthRenameForm from '../auth/AuthRenameForm'
import renameAuthContext from '../auth/renameAuthContext'

export default function AuthListsTitle (props: {
  name: string
}): JSX.Element {
  const rename = renameAuthContext.use()
  if (rename.active) {
    return <AuthRenameForm />
  }
  return <>{props.name}</>
}
