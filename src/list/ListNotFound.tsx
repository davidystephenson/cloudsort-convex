import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import LayoutNotFound from '../layout/LayoutNotFound'

export default function ListNotFound (): ReactNode {
  const params = useParams()
  return (
    <LayoutNotFound>
      List {params.listId}
    </LayoutNotFound>
  )
}
