import { JSX } from 'react'
import { ButtonRobe } from 'robes'
import ClinkRobe, { ButtonClinkRobe } from 'clink-robe'
import { HStack } from '@chakra-ui/react'
import LayoutProfile from './LayoutProfile'
import authUserContext from '../auth/authUserContext'
import { useConvexAuth } from 'convex/react'

export default function LayoutAuth (): JSX.Element {
  const auth = useConvexAuth()
  const authUser = authUserContext.useMaybe()
  if (auth.isLoading) {
    return <ButtonRobe isLoading />
  }
  if (auth.isAuthenticated) {
    if (authUser == null) {
      return <ButtonRobe isLoading />
    }
    return <LayoutProfile />
  }
  return (
    <HStack>
      <ClinkRobe to='/login'>Login</ClinkRobe>
      <ButtonClinkRobe to='/register'>
        Register
      </ButtonClinkRobe>
    </HStack>
  )
}
