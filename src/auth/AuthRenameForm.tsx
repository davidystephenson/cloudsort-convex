import { FormEvent, JSX, useState } from 'react'
import { FormRobe, ImpressedRobe, InputRobe, RedIconButtonRobe } from 'robes'
import authActionsContext from './authActionsContext'
import { ButtonGroup } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'

export default function AuthRenameForm (): JSX.Element {
  const authUser = authActionsContext.use()
  const [name, setName] = useState('')
  const named = name.length > 0
  function handleSubmit (event: FormEvent): void {
    event.preventDefault()
    void authUser.rename.act({ name })
  }
  const submit = named && (
    <ImpressedRobe
      error={authUser.rename.errorMessage}
      type='submit'
      size='xs'
    >
      Change username
    </ImpressedRobe>
  )
  function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
  }
  function handleCancel (): void {
    setName('')
    authUser.rename.deactivate()
  }
  return (
    <FormRobe
      stack={{ alignItems: 'center', direction: 'row', width: '100%' }}
      onSubmit={handleSubmit}
    >
      <InputRobe
        width='100%'
        placeholder='Change username'
        value={name}
        onChange={handleChange}
      />
      <ButtonGroup isAttached>
        {submit}
        <RedIconButtonRobe
          aria-label='Cancel'
          icon={<MdClose />}
          onClick={handleCancel}
          size='xs'
          variant='solid'
        />
      </ButtonGroup>
    </FormRobe>
  )
}
