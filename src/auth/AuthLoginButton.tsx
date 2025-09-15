import { JSX } from 'react'
import { ButtonClinkRobe } from 'clink-robes'

export default function AuthLoginButton (): JSX.Element {
  return (
    <ButtonClinkRobe to='/login'>
      Login
    </ButtonClinkRobe>
  )
}
