import { JSX } from 'react'
import ClinkRobe, { ButtonClinkRobe } from 'clink-robes'
import { HStack } from '@chakra-ui/react'
import HeaderProfile from './HeaderProfile'
import authContext from '../auth/authContext'

export default function HeaderAuth (): JSX.Element {
  const auth = authContext.useMaybe()
  if (auth.provided) {
    return <HeaderProfile />
  }
  return (
    <HStack>
      <ClinkRobe to='/login'>
        Login
      </ClinkRobe>
      <ButtonClinkRobe to='/register'>
        Register
      </ButtonClinkRobe>
    </HStack>
  )
}
