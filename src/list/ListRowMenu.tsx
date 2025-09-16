import { JSX } from 'react'
import deleteListContext from './deleteListContext'
import ListRowMenuConsumer from './ListRowMenuConsumer'
import listContext from './listContext'

export default function ListRowMenu (props: {
  debug?: boolean
}): JSX.Element {
  const list = listContext.use()
  return (
    <deleteListContext.Provider args={{ listId: list._id }}>
      <ListRowMenuConsumer debug={props.debug} />
    </deleteListContext.Provider>
  )
}
