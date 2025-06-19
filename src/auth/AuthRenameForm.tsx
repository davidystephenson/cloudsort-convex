import { JSX, useState } from 'react'
import renameAuthContext from './renameAuthContext'
import { InlineActorFormRobe } from 'robes'

export default function AuthRenameForm (): JSX.Element {
  const rename = renameAuthContext.use()
  const [name, setName] = useState('')
  return (
    <InlineActorFormRobe
      actor={rename}
      input={{ name }}
      form={{ stack: { width: '300px' } }}
      onValueChange={setName}
      value={name}
    />
  )
}
