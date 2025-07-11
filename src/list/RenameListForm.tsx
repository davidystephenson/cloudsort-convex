import { JSX, useState } from 'react'
import { InlineActorFormRobe } from 'robes'
import renameListContext from './renameListContext'
import listContext from './listContext'

export default function RenameListForm (): JSX.Element {
  const rename = renameListContext.use()
  const list = listContext.use()
  const [name, setName] = useState('')
  return (
    <InlineActorFormRobe
      actor={rename}
      input={{ listId: list._id, name }}
      form={{ stack: { width: '300px' } }}
      onValueChange={setName}
      value={name}
    />
  )
}
