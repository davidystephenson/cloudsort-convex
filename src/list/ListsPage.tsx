import { ReactNode } from 'react'
import AuthPage from '../auth/AuthPage'
import CreateListForm from './CreateListForm'
import AuthListsTable from './AuthListsTable'
import PublicLists from './PublicLists'

export default function ListsPage (): ReactNode {
  return (
    <AuthPage title='Lists'>
      <CreateListForm />
      <AuthListsTable />
      {/* <PublicLists /> */}
    </AuthPage>
  )
}
