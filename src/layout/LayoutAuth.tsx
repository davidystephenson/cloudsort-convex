import { JSX } from 'react'
import { ButtonRobe, ProfileRobe } from 'robes'
import ClinkRobe, { ButtonClinkRobe } from 'clink-robe'
import authContext from '../auth/authContext'
import { useAuthActions } from '@convex-dev/auth/react'
import { HStack } from '@chakra-ui/react'

export default function LayoutAuth (): JSX.Element {
  const actions = useAuthActions()
  const auth = authContext.use()
  if (auth.convex.isLoading) {
    return <ButtonRobe isLoading />
  }
  if (auth.user == null) {
    return (
      <HStack>
        <ClinkRobe to='/login'>Login</ClinkRobe>
        <ButtonClinkRobe to='/register'>
          Register
        </ButtonClinkRobe>
      </HStack>
    )
  }
  function handleLogout (): void {
    void actions.signOut()
  }
  return (
    <ProfileRobe onLogout={handleLogout}>
      {auth.user.email}
    </ProfileRobe>
  )
}
