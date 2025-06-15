import { ReactNode } from 'react'
import LayoutPage from '../layout/LayoutPage'
import useAuthLoading from '../auth/useAuthLoading'
import List from './List'

export default function ListPage (): ReactNode {
  const authLoading = useAuthLoading()
  if (authLoading) {
    return <LayoutPage loading />
  }
  return <List />
}
