import { JSX, ReactNode } from 'react'
import DeleteListItem from './DeleteListItem'
import PublicListMenuItem from './PublicListMenuItem'
import authContext from '../auth/authContext'
import userContext from '../user/userContext'

export default function PrivateListItems (props: {
  children?: ReactNode
}): JSX.Element {
  const auth = authContext.useMaybe()
  const user = userContext.use()
  if (auth.value?._id !== user._id) {
    return <></>
  }
  return (
    <>
      <PublicListMenuItem />
      {props.children}
      <DeleteListItem />
    </>
  )
}
