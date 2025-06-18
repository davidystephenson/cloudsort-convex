import { JSX, useState } from 'react'
import { InlineFormRobe } from 'robes'
import createListContext from './createListContext'

export default function CreateListForm (): JSX.Element {
  const createList = createListContext.use()
  const [name, setName] = useState('')
  if (!createList.active) {
    return <></>
  }
  function handleCancel (): void {
    createList.deactivate()
  }
  function handleSubmit (): void {
    void createList.act({ name })
  }
  return (
    <InlineFormRobe
      label='Create list'
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onValueChange={setName}
      value={name}
    />
  )
}
