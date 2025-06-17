import { FormEvent, JSX, useState } from 'react'
import { ButtonRobe, FormRobe, ImpressedRobe, InputRobe } from 'robes'
import authUserContext from './authUserContext'

export default function AuthRenameForm (): JSX.Element {
  const authUser = authUserContext.use()
  const [name, setName] = useState('')
  const named = name.length > 0
  function handleSubmit (event: FormEvent): void {
    event.preventDefault()
    void authUser.rename.act({ name })
  }
  const submit = named && (
    <ImpressedRobe
      error={authUser.rename.errorMessage}
      minW='unset'
    >
      Rename User
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
        placeholder='Rename user'
        value={name}
        onChange={handleChange}
      />
      {submit}
      <ButtonRobe
        minW='unset'
        colorScheme='red'
        onClick={handleCancel}
      >
        Cancel
      </ButtonRobe>
    </FormRobe>
  )
}
