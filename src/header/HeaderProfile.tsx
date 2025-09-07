import { JSX } from 'react'
import { ProfileRobe } from 'robes'
import { useAuthActions } from '@convex-dev/auth/react'
import { Doc } from '../../convex/_generated/dataModel'

export default function HeaderProfile (props: {
  user: Doc<'users'>
}): JSX.Element {
  const actions = useAuthActions()
  function handleLogout (): void {
    void actions.signOut()
  }
  return (
    <ProfileRobe onLogout={handleLogout}>
      {props.user.name}
    </ProfileRobe>
  )
}
