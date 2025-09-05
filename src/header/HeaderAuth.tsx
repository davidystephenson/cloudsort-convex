import { JSX } from 'react'
import { ButtonRobe } from 'robes'
import ClinkRobe, { ButtonClinkRobe } from 'clink-robe'
import { HStack } from '@chakra-ui/react'
import headerContext from './headerContext'
import HeaderProfile from './HeaderProfile'

export default function HeaderAuth (): JSX.Element {
  const header = headerContext.use()
  if (header.loading === true) {
    return <ButtonRobe isLoading />
  }
  if (header.user != null) {
    return <HeaderProfile user={header.user} />
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
