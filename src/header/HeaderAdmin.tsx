import { api } from '../../convex/_generated/api'
import useArchedMutation from '../arched/useArchedMutation'
import authContext from '../auth/authContext'
import { RedMenuItemRobe } from 'robes'
import { LiaSkullCrossbonesSolid } from 'react-icons/lia'
import { useAuthActions } from '@convex-dev/auth/react'
import type { JSX } from 'react'

export default function HeaderAdmin (): JSX.Element {
  const resetAll = useArchedMutation({ label: 'Reset All', mutation: api.resetAll.default })
  const auth = authContext.use()
  const authActions = useAuthActions()
  if (!auth.admin) {
    return <></>
  }
  async function reset (): Promise<void> {
    await resetAll.act({})
    await authActions.signOut()
  }
  function handleClick (): void {
    void reset()
  }
  return (
    <RedMenuItemRobe icon={<LiaSkullCrossbonesSolid />} onClick={handleClick}>
      RESET ALL
    </RedMenuItemRobe>
  )
}
