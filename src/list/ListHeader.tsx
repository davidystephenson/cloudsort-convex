import { JSX } from 'react'
import ListTitle from './ListTitle'
import renameListContext from './renameListContext'

export default function ListHeader (): JSX.Element {
  return (
    <renameListContext.Provider>
      <ListTitle />
    </renameListContext.Provider>
  )
}
