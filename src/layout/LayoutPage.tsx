import { JSX, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'
import LayoutLoading from './LayoutLoading'
import useAuthLoading from '../auth/useAuthLoading'

export default function LayoutPage (props: {
  title?: ReactNode
} & (
  { loading?: boolean, children?: ReactNode } |
  { loading: true }
)): JSX.Element {
  const authLoading = useAuthLoading()
  const loading = props.loading === true || authLoading
  if (loading) {
    return (
      <LayoutLoading>
        {props.title}
      </LayoutLoading>
    )
  }

  return (
    <>
      <Heading size='lg'>
        {props.title}
      </Heading>
      {props.children}
    </>
  )
}
