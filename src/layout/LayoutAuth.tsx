import { JSX } from 'react'
import { ButtonRobe, ProfileRobe } from 'robes'
import { ButtonClinkRobe } from 'clink-robe'
import authContext from '../auth/authContext'

export default function LayoutAuth (): JSX.Element {
  const auth = authContext.use()
  if (auth.convex.isLoading) {
    return <ButtonRobe isLoading />
  }
  if (auth.user == null) {
    return (
      <ButtonClinkRobe to='/register'>
        Register
      </ButtonClinkRobe>
    )
  }
  return (
    <ProfileRobe>
      {auth.user.email}
    </ProfileRobe>
  )
}
