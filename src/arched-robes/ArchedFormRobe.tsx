import { JSX } from 'react'
import { FormRobeProps, InlineFormRobe } from 'robes'
import { ContextCreation } from 'context-creator'
import { Action } from '../action/actionTypes'

export default function ArchedInlineFormRobe <
  Args, ReturnType
> (props: {
  args: Args
  context: ContextCreation<Action<Args, ReturnType>, {}>
  form?: FormRobeProps
  label: string
  onValueChange: (value: string) => void
  value: string
}): JSX.Element {
  const action = props.context.use()
  if (!action.active) {
    return <></>
  }
  function handleCancel (): void {
    action.deactivate()
  }
  function handleSubmit (): void {
    void action.act(props.args)
  }
  return (
    <InlineFormRobe
      form={props.form}
      label={props.label}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onValueChange={props.onValueChange}
      value={props.value}
    />
  )
}
