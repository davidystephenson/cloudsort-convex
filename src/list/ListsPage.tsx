import { ReactNode } from 'react'
import AuthPage from '../auth/AuthPage'
import CreateListForm from './CreateListForm'
import ListsTable from './ListsTable'

export default function ListsPage (): ReactNode {
  return (
    <AuthPage title='Lists'>
      <CreateListForm />
      <ListsTable />
    </AuthPage>
  )
}
