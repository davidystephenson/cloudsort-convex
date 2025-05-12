import { ReactNode } from 'react'
import AuthPage from '../auth/AuthPage'
import CreateListForm from './CreateListForm'

export default function ListsPage (): ReactNode {
  return (
    <AuthPage title='Lists'>
      <CreateListForm />
    </AuthPage>
  )
}
