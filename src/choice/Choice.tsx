import { JSX } from 'react'
import listContext from '../list/listContext'

export default function Choice (): JSX.Element {
  const list = listContext.use()
  if (list.catalog == null) {
    return <></>
  }
  return <>{list.catalog} vs {list.queue}</>
}
