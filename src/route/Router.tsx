import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListsPage from '../list/ListsPage'
import AuthLoginPage from '../auth/AuthLoginPage'
import AuthRegisterPage from '../auth/AuthRegisterPage'

export default function Router (): ReactNode {
  return (
    <Routes>
      <Route path='/' element={<ListsPage />} />
      <Route path='/login' element={<AuthLoginPage />} />
      <Route path='/register' element={<AuthRegisterPage />} />
    </Routes>
  )
}
