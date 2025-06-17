import { ChangeEvent, FormEvent, JSX, useState } from 'react'
import { FormRobe, ImpressedRobe, InputRobe } from 'robes'
import { api } from '../../convex/_generated/api'
import { useMutation } from 'convex/react'
import { ConvexError } from 'convex/values'
import { HStack } from '@chakra-ui/react'

export default function CreateListForm (): JSX.Element {
  const create = useMutation(api.lists.create)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<ConvexError<string>>()
  const [name, setName] = useState('')
  const disabled = name.length === 0
  function handleNameChange (event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
  }
  async function createList (): Promise<void> {
    setCreating(true)
    try {
      await create({ name })
    } catch (error) {
      if (!(error instanceof ConvexError)) {
        throw error
      }
      setError(error)
    }
    setCreating(false)
  }
  function handleSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    void createList()
  }
  const button = name.length > 0 && (
    <ImpressedRobe
      disabled={disabled}
      error={error?.data}
      isLoading={creating}
      type='submit'
    >
      Create List
    </ImpressedRobe>
  )

  return (
    <FormRobe onSubmit={handleSubmit}>
      <HStack>
        <InputRobe
          onChange={handleNameChange}
          placeholder='Create list'
          value={name}
        />
        {button}
      </HStack>
    </FormRobe>
  )
}
