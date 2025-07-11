import { JSX, ReactNode } from 'react'
import authContext from '../auth/authContext'
import deleteListContext from './deleteListContext'
import DeleteListItem from './DeleteListItem'
import listContext from './listContext'
import PublicListMenuItem from './PublicListMenuItem'

export default function PrivateListItems (props: {
  children?: ReactNode
}): JSX.Element {
  const auth = authContext.data.useMaybe()
  const list = listContext.use()
  if (!auth.provided || list.userId !== auth.value._id) {
    return <></>
  }
  const args = { listId: list._id }
  return (
    <>
      <PublicListMenuItem />
      {props.children}
      <deleteListContext.Provider args={args}>
        <DeleteListItem />
      </deleteListContext.Provider>
    </>
  )
}
