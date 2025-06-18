import { FormEvent, JSX, useState } from 'react'
import { FormRobe, ImpressedRobe, InputRobe, RedIconButtonRobe } from 'robes'
import { ButtonGroup, InputGroup, InputRightElement } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import renameAuthContext from './renameAuthContext'

export default function AuthRenameForm (): JSX.Element {
  const rename = renameAuthContext.use()
  const [name, setName] = useState('')
  const named = name.length > 0
  function handleSubmit (event: FormEvent): void {
    event.preventDefault()
    void rename.act({ name })
  }
  const submit = named && (
    <ImpressedRobe
      error={rename.errorMessage}
      size='xs'
      type='submit'
      variant='ghost'
    >
      Change username
    </ImpressedRobe>
  )
  function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
  }
  function handleCancel (): void {
    setName('')
    rename.deactivate()
  }
  return (
    <FormRobe
      stack={{ alignItems: 'center', direction: 'row', width: '300px' }}
      onSubmit={handleSubmit}
    >
      <InputGroup width='100%'>
        <InputRobe
          width='100%'
          placeholder='Change username'
          value={name}
          onChange={handleChange}
          autoFocus
        />
        <InputRightElement w='fit-content'>
          <ButtonGroup isAttached mb='10px'>
            {submit}
            <RedIconButtonRobe
              aria-label='Cancel'
              icon={<MdClose />}
              onClick={handleCancel}
              size='xs'
              variant='ghost'
            />
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
    </FormRobe>
  )
}
