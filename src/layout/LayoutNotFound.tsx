import { ReactNode } from 'react'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { Heading, HStack } from '@chakra-ui/react'
import getAuthContext from '../auth/getAuthContext'

export default function LayoutNotFound (props: {
  children: ReactNode
}): ReactNode {
  const authUser = getAuthContext.data.useMaybe()
  if (authUser == null) {
    return <AuthLoginButton />
  }
  return (
    <>
      <Heading size='sm'>
        <HStack>
          {props.children}
          <span>not found</span>
        </HStack>
      </Heading>
      <ButtonClinkRobe to='/'>
        Lists
      </ButtonClinkRobe>
    </>
  )
}
