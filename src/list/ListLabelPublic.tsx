import { JSX } from 'react'
import listContext from './listContext'
import { MdPublic } from 'react-icons/md'

export default function ListLabelPublic (): JSX.Element {
  const list = listContext.use()
  if (list.doc.public) {
    return <MdPublic />
  }
  return <></>
}
