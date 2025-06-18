import { JSX, useState } from 'react'
import { InlineFormRobe } from 'robes'
import renameAuthContext from './renameAuthContext'

export default function AuthRenameForm (): JSX.Element {
  const rename = renameAuthContext.use()
  const [name, setName] = useState('')
  if (!rename.active) {
    return <></>
  }
  function handleCancel (): void {
    rename.deactivate()
  }
  function handleSubmit (): void {
    void rename.act({ name })
  }
  return (
    <InlineFormRobe
      label='Rename user'
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onValueChange={setName}
      value={name}
    />
  )
}
