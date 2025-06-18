import { JSX, useState } from 'react'
import createListContext from './createListContext'
import ArchedInlineFormRobe from '../arched-robes/ArchedFormRobe'

export default function CreateListForm (): JSX.Element {
  const [name, setName] = useState('')
  return (
    <ArchedInlineFormRobe
      args={{ name }}
      context={createListContext}
      form={{ width: '100%', stack: { width: '100%' } }}
      label='Create list'
      onValueChange={setName}
      value={name}
    />
  )
}
