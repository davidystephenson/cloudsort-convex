import { ButtonClinkRobe } from 'clink-robes'
import listContext from './listContext'
import { JSX } from 'react'
import authContext from '../auth/authContext'

export default function ListUser (): JSX.Element {
  const auth = authContext.useMaybe()
  const list = listContext.use()
  if (auth.value?._id === list.userId) {
    return <></>
  }
  const userPath = `/user/${list.userId}`
  return (
    <ButtonClinkRobe to={userPath}>
      {list.user.name}
    </ButtonClinkRobe>
  )
}
