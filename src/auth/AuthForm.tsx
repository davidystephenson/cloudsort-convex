import { Stack, VStack } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import Impressed from 'impressed'
import UiInput from '../ui/UiInput'

export default function AuthForm (): ReactNode {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Stack direction='column'>
      <UiInput label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <UiInput label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Impressed w='fit-content'>Login</Impressed>
    </Stack>
  )
}
