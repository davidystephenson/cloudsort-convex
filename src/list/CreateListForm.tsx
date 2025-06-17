import { ChangeEvent, FormEvent, JSX, useState } from 'react'
import { FormRobe, ImpressedRobe, InputRobe, RedIconButtonRobe } from 'robes'
import authActionsContext from '../auth/authActionsContext'
import { ButtonGroup } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'

export default function CreateListForm (): JSX.Element {
  const authUser = authActionsContext.use()
  const [name, setName] = useState('')
  if (!authUser.createList.active) {
    return <></>
  }
  const disabled = name.length === 0
  function handleNameChange (event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value)
  }
  function handleSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    void authUser.createList.act({ name })
  }
  const button = name.length > 0 && (
    <ImpressedRobe
      disabled={disabled}
      error={authUser.createList.errorMessage}
      isLoading={authUser.createList.acting}
      type='submit'
      minW='unset'
      size='xs'
    >
      Create List
    </ImpressedRobe>
  )
  function handleCancel (): void {
    setName('')
    authUser.createList.deactivate()
  }
  return (
    <FormRobe onSubmit={handleSubmit} width='100%' stack={{ alignItems: 'center', direction: 'row' }}>
      <InputRobe
        onChange={handleNameChange}
        placeholder='Create list'
        size='xs'
        value={name}
        width='100%'
      />
      <ButtonGroup isAttached>
        {button}
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
