import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListsPage from '../list/ListsPage'
import AuthForm from '../auth/AuthForm'

export default function Router (): ReactNode {
  return (
    <Routes>
      <Route path='/' element={<ListsPage />} />
      <Route path='/login' element={<AuthForm />} />
    </Routes>
  )
}
