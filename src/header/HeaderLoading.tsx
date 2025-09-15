import { JSX } from 'react'
import { ButtonRobe } from 'robes'
import HeaderContainer from './HeaderContainer'

export default function HeaderLoading (): JSX.Element {
  return (
    <HeaderContainer>
      <ButtonRobe isLoading />
    </HeaderContainer>
  )
}
