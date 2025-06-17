import { ReactNode } from 'react'
import authActionsContext from '../auth/authActionsContext'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

export default function ListNotFound (): ReactNode {
  const params = useParams()
  const authUser = authActionsContext.useMaybe()
  if (authUser == null) {
    return <AuthLoginButton />
  }
  return (
    <>
      <Heading size='sm'>List {params.listId} not found</Heading>
      <ButtonClinkRobe to='/'>
        Lists
      </ButtonClinkRobe>
    </>
  )
}
