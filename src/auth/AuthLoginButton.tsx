import { JSX } from 'react'
import { ButtonClinkRobe } from 'clink-robe'

export default function AuthLoginButton (): JSX.Element {
  return (
    <ButtonClinkRobe to='/login'>
      Login
    </ButtonClinkRobe>
  )
}
