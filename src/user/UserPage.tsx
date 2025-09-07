import { JSX } from 'react'
import { useParams } from 'react-router-dom'
import UserPageContent from './UserPageContent'

export default function UserPage (): JSX.Element {
  const params = useParams()
  if (params.userId == null) {
    throw new Error('userId is null')
  }
  return <UserPageContent userId={params.userId} />
}
