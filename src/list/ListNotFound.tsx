import { ReactNode } from 'react'
import AuthLoginButton from '../auth/AuthLoginButton'
import { ButtonClinkRobe } from 'clink-robe'
import { useParams } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'
import authContext from '../auth/authContext'

export default function ListNotFound (): ReactNode {
  const params = useParams()
  const authUser = authContext.data.useMaybe()
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
