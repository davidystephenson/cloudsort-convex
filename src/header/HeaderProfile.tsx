import { JSX } from 'react'
import { ProfileRobe } from 'robes'
import { useAuthActions } from '@convex-dev/auth/react'
import authContext from '../auth/authContext'
import HeaderAdmin from './HeaderAdmin'

export default function HeaderProfile (): JSX.Element {
  const auth = authContext.use()
  const actions = useAuthActions()
  function handleLogout (): void {
    void actions.signOut()
  }
  const colorScheme = auth.admin ? { colorScheme: 'red' } : {}
  const button = { ...colorScheme, children: auth.name }
  return (
    <ProfileRobe button={button} onLogout={handleLogout}>
      <HeaderAdmin />
    </ProfileRobe>
  )
}
