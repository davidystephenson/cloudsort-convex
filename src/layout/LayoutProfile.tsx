import { JSX } from 'react'
import { ProfileRobe } from 'robes'
import { useAuthActions } from '@convex-dev/auth/react'
import authUserContext from '../auth/authUserContext'

export default function LayoutProfile (): JSX.Element {
  const actions = useAuthActions()
  const authUser = authUserContext.use()
  function handleLogout (): void {
    void actions.signOut()
  }
  return (
    <ProfileRobe onLogout={handleLogout}>
      {authUser.email}
    </ProfileRobe>
  )
}
