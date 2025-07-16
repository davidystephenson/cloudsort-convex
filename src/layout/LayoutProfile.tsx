import { JSX } from 'react'
import { ProfileRobe } from 'robes'
import { useAuthActions } from '@convex-dev/auth/react'
import getAuthContext from '../auth/getAuthContext'

export default function LayoutProfile (): JSX.Element {
  const actions = useAuthActions()
  const auth = getAuthContext.data.use()
  function handleLogout (): void {
    void actions.signOut()
  }
  return (
    <ProfileRobe onLogout={handleLogout}>
      {auth.email}
    </ProfileRobe>
  )
}
