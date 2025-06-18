import { JSX, useState } from 'react'
import { InlineFormRobe } from 'robes'
import renameAuthContext from './renameAuthContext'

export default function AuthRenameForm (): JSX.Element {
  const rename = renameAuthContext.use()
  const [name, setName] = useState('')
  function handleCancel (): void {
    rename.deactivate()
  }
  function handleSubmit (): void {
    void rename.act({ name })
  }
  return (
    <InlineFormRobe
      value={name}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onValueChange={setName}
    />
  )
}
