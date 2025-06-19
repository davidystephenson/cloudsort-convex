import { JSX } from 'react'
import listContext from './listContext'
import PublishListItem from './PublishListItem'
import UnpublishListItem from './UnpublishListItem'
import publishListContext from './publishListContext'
import unpublishListContext from './unpublishListContext'

export default function PublicListItem (): JSX.Element {
  const list = listContext.use()
  const args = { listId: list.doc._id }
  if (list.doc.public) {
    return (
      <unpublishListContext.Provider args={args}>
        <UnpublishListItem />
      </unpublishListContext.Provider>
    )
  }
  return (
    <publishListContext.Provider args={args}>
      <PublishListItem />
    </publishListContext.Provider>
  )
}
