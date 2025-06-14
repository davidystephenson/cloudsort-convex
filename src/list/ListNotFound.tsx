import { ReactNode } from 'react'
import authUserContext from '../auth/authUserContext'
import AuthLoginButton from '../auth/AuthLoginButton'
import LayoutPage from '../layout/LayoutPage'
import CreateListForm from './CreateListForm'

export default function ListNotFound (): ReactNode {
  const authUser = authUserContext.useMaybe()
  if (authUser == null) {
    return <AuthLoginButton />
  }
  return (
    <LayoutPage title='List not found'>
      <CreateListForm />
    </LayoutPage>
  )
}
