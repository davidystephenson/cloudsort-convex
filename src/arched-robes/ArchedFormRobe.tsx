import { JSX } from 'react'
import { InlineFormRobe } from 'robes'
import { ContextCreation } from 'context-creator'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { Action } from '../action/actionTypes'

export default function ArchedFormRobe <
  Data,
  Args extends DefaultFunctionArgs,
  Mutation extends FunctionReference<
  'mutation', 'public', Args, Data
  >,
> (props: {
  context: ContextCreation<Action<Mutation['_args'], Mutation['_returnType']>, {}>
  label: string
  onValueChange: (value: string) => void
  value: string
} & Mutation['_args']): JSX.Element {
  const { context, label, value, onValueChange, ...rest } = props
  const action = context.use()
  if (!action.active) {
    return <></>
  }
  function handleCancel (): void {
    action.deactivate()
  }
  function handleSubmit (): void {
    void action.act(rest as unknown as Mutation['_args'])
  }
  return (
    <InlineFormRobe
      label={label}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onValueChange={onValueChange}
      value={value}
    />
  )
}
