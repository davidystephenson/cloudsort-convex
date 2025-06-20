import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListsPage from '../list/ListsPage'
import AuthLoginPage from '../auth/AuthLoginPage'
import AuthRegisterPage from '../auth/AuthRegisterPage'
import ListPage from '../list/ListPage'
import UserPage from '../user/UserPage'

export default function Router (): ReactNode {
  return (
    <Routes>
      <Route path='/' element={<ListsPage />} />
      <Route path='/login' element={<AuthLoginPage />} />
      <Route path='/register' element={<AuthRegisterPage />} />
      <Route path='/list/:listId' element={<ListPage />} />
      <Route path='/user/:userId' element={<UserPage />} />
    </Routes>
  )
}
