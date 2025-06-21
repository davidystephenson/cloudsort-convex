import { JSX, useState } from 'react'
import createListContext from './createListContext'
import { InlineActorFormRobe } from 'robes'

export default function CreateListForm (): JSX.Element {
  const createList = createListContext.use()
  const [name, setName] = useState('')
  function handleChange (value: string): void {
    console.log('value', value)
    setName(value)
  }
  return (
    <InlineActorFormRobe
      actor={createList}
      input={{ name }}
      form={{ width: '100%', stack: { width: '100%' } }}
      onValueChange={handleChange}
      value={name}
    />
  )
}
