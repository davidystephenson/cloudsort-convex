import { JSX } from 'react'
import authActionsContext from '../auth/authActionsContext'
import AuthRenameForm from '../auth/AuthRenameForm'
import authContext from '../auth/authContext'

export default function AuthListsTitle (): JSX.Element {
  const auth = authContext.data.use()
  const actions = authActionsContext.use()
  if (actions.rename.active) {
    return <AuthRenameForm />
  }
  return (
    <>
      {auth.name}
    </>
  )
}
