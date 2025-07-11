import { JSX, ReactNode, useState } from 'react'
import LayoutPage from '../layout/LayoutPage'
import { Stack } from '@chakra-ui/react'
import { useAuthActions } from '@convex-dev/auth/react'
import { useConvexAuth } from 'convex/react'
import { useNavigate } from 'react-router-dom'
import { ImpressedRobe, InputRobe } from 'robes'

export default function AuthRegisterPage (): JSX.Element {
  const actions = useAuthActions()
  const auth = useConvexAuth()
  const navigate = useNavigate()
  const { signIn } = useAuthActions()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<ReactNode>()
  function handleLogout (): void {
    void actions.signOut()
  }
  if (auth.isAuthenticated) {
    return (
      <ImpressedRobe onClick={handleLogout}>
        Logout
      </ImpressedRobe>
    )
  }
  async function authenticate (): Promise<void> {
    setLoading(true)
    try {
      const args = {
        email,
        name,
        password,
        flow: 'signUp'
      }
      await signIn('password', args)
      await navigate('/')
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error
      }
      setError(error.message)
    }
    setLoading(false)
  }
  function handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    void authenticate()
  }
  function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
    setError(undefined)
  }
  function handleNameChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
    setError(undefined)
  }
  function handlePasswordChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value)
    setError(undefined)
  }
  return (
    <LayoutPage title='Register'>
      <form onSubmit={handleSubmit}>
        <Stack>
          <InputRobe
            label='Email'
            value={email}
            onChange={handleEmailChange}
          />
          <InputRobe
            label='Username'
            value={name}
            onChange={handleNameChange}
          />
          <InputRobe
            label='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <ImpressedRobe
            error={error}
            isLoading={loading}
            type='submit'
            w='fit-content'
          >
            Register
          </ImpressedRobe>
        </Stack>
      </form>
    </LayoutPage>
  )
}
