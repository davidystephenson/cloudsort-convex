import { useParams } from 'react-router-dom'

export default function useListId (): string {
  const params = useParams()
  if (params.listId == null) {
    throw new Error('There is no listId')
  }
  return params.listId
}
