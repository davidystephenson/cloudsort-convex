import { JSX } from 'react'
import listContext from './listContext'
import PublishListItem from './PublishListItem'
import UnpublishListItem from './UnpublishListItem'

export default function PublicListItem (): JSX.Element {
  const list = listContext.use()
  if (list.doc.public) {
    return <UnpublishListItem />
  }
  return <PublishListItem />
}
