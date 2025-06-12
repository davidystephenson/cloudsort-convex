import { JSX, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'
import authLoadingContext from '../auth/authLoadingContext'
import LayoutLoading from './LayoutLoading'

export default function LayoutPage (props: {
  title: ReactNode
} & (
  { loading?: boolean, children: ReactNode } |
  { loading: true }
)): JSX.Element {
  const authLoading = authLoadingContext.use()
  const loading = props.loading === true || authLoading.loading
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
