import { JSX, ReactNode } from 'react'
import deleteListContext from './deleteListContext'
import DeleteListItem from './DeleteListItem'
import listContext from './listContext'
import PublicListMenuItem from './PublicListMenuItem'

export default function PrivateListItems (props: {
  children?: ReactNode
}): JSX.Element {
  const list = listContext.use()
  return (
    <>
      <PublicListMenuItem />
      {props.children}
      <deleteListContext.Provider args={{ listId: list._id }}>
        <DeleteListItem />
      </deleteListContext.Provider>
    </>
  )
}
