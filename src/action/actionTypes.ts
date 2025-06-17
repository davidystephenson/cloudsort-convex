export interface Action <Input, Output> {
  act: (props: Input) => Promise<Output>
  activate: () => void
  deactivate: () => void
  active: boolean
  acting: boolean
  error: Error | undefined
  errorMessage: string | undefined
  fail: (props: {
    error: Error
    message?: string
  }) => void
  start: () => void
  succeed: () => void
}
