import { ReactNode } from 'react'
import authUserContext from '../auth/authUserContext'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

export default function ListNotFound (): ReactNode {
  const params = useParams()
  const authUser = authUserContext.useMaybe()
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
