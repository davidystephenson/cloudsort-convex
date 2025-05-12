import { JSX, ReactNode } from 'react'
import LayoutPage from '../layout/LayoutPage'
import AuthContent from './AuthContent'

export default function AuthPage (props: {
  children: ReactNode
  title: string
}): JSX.Element {
  return (
    <LayoutPage title={props.title}>
      <AuthContent>
        {props.children}
      </AuthContent>
    </LayoutPage>
  )
}
