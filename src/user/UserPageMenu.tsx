import { ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import authContext from '../auth/authContext'
import LayoutReeling from '../layout/LayoutReeling'
import AuthMenu from '../auth/AuthMenu'

export default function UserPageMenu (): ReactNode {
  const auth = authContext.query.useMaybe()
  const params = useParams()

  if (!auth.provided) {
    return <></>
  }
  if (auth.value.loading) {
    return <LayoutReeling />
  }
  if (auth.value.data._id !== params.userId) {
    return <></>
  }
  return <AuthMenu />
}
