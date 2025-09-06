import { HStack, Heading } from '@chakra-ui/react'
import ClinkRobe from 'clink-robe'
import { JSX } from 'react'
import headerContext from './headerContext'
import HeaderAuth from './HeaderAuth'
import authContext from '../auth/authContext'

export default function Header (props: {
  loading?: boolean
}): JSX.Element {
  const auth = authContext.useMaybe()
  return (
    <headerContext.Provider {...props} user={auth.value}>
      <HStack justifyContent='space-between'>
        <ClinkRobe to='/'>
          <Heading>Cloudsort</Heading>
        </ClinkRobe>
        <HeaderAuth />
      </HStack>
    </headerContext.Provider>
  )
}
