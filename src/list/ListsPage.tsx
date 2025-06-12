import { ReactNode } from 'react'
import AuthPage from '../auth/AuthPage'
import CreateListForm from './CreateListForm'
import AuthListsTable from './AuthListsTable'
import PublicLists from './PublicLists'
import { api } from '../../convex/_generated/api'
import { useConvexQuery } from '../convex/useConvexQuery'
import authLoadingContext from '../auth/authLoadingContext'
import LayoutPage from '../layout/LayoutPage'

export default function ListsPage (): ReactNode {
  const authLoading = authLoadingContext.use()
  const _public = useConvexQuery({ query: api.lists.getPublic })
  const user = useConvexQuery({ query: api.lists.getByUser })
  const loading = authLoading.loading || _public.loading || user.loading
  if (loading) {
    return <LayoutPage loading title='Lists' />
  }
  return (
    <AuthPage title='Lists'>
      <CreateListForm />
      <AuthListsTable />
      <PublicLists />
    </AuthPage>
  )
}
