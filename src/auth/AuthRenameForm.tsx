import { JSX, useState } from 'react'
import renameAuthContext from './renameAuthContext'
import ArchedInlineFormRobe from '../arched-robes/ArchedFormRobe'

export default function AuthRenameForm (): JSX.Element {
  const [name, setName] = useState('')
  return (
    <ArchedInlineFormRobe
      args={{ name }}
      context={renameAuthContext}
      form={{ stack: { width: '300px' } }}
      label='Rename user'
      onValueChange={setName}
      value={name}
    />
  )
}
