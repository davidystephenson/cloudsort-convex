import { JSX } from 'react'
import deleteListContext from './deleteListContext'
import DeleteListItem from './DeleteListItem'
import PublicListItem from './PublicListItem'
import authContext from '../auth/authContext'
import listContext from './listContext'

export default function PrivateListItems (): JSX.Element {
  const auth = authContext.data.useMaybe()
  const list = listContext.use()
  if (!auth.provided || list.userId !== auth.value._id) {
    return <></>
  }
  const args = { listId: list._id }
  return (
    <>
      <PublicListItem />
      <deleteListContext.Provider args={args}>
        <DeleteListItem />
      </deleteListContext.Provider>
    </>
  )
}
