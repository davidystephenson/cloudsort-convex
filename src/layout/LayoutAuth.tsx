import { JSX } from 'react'
import { ButtonRobe, ReelingRobe } from 'robes'
import ClinkRobe, { ButtonClinkRobe } from 'clink-robe'
import authContext from '../auth/authContext'
import { HStack } from '@chakra-ui/react'
import LayoutProfile from './LayoutProfile'
import authUserContext from '../auth/authUserContext'

export default function LayoutAuth (): JSX.Element {
  const auth = authContext.use()
  const authUser = authUserContext.useMaybe()
  if (auth.convex.isLoading) {
    return <ButtonRobe isLoading />
  }
  if (auth.convex.isAuthenticated) {
    if (authUser == null) {
      return <ReelingRobe size='20px' />
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
