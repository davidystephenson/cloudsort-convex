import { useParams } from 'react-router-dom'

export default function useUserId (): string {
  const params = useParams()
  if (params.userId == null) {
    throw new Error('userId is null')
  }
  return params.userId
}
