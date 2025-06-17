import { useState, useEffect, useCallback, useMemo } from 'react'
import { Action } from './actionTypes'

export default function useAction <
  Input,
  Output
> (props: {
  action: (props: Input) => Promise<Output>
  acting?: boolean
  active?: boolean
}): Action<Input, Output> {
  const [active, setActive] = useState(props?.active ?? false)
  useEffect(() => {
    setActive(props?.active ?? false)
  }, [props?.active])
  const [acting, setActing] = useState(props?.acting ?? false)
  useEffect(() => {
    setActing(props?.acting ?? false)
  }, [props?.acting])
  const [error, setError] = useState<Error>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const activate = useCallback(() => {
    setActive(true)
  }, [])
  const deactivate = useCallback(() => {
    setActive(false)
  }, [])
  const start = useCallback(() => {
    setActing(true)
    setError(undefined)
    setErrorMessage(undefined)
  }, [])
  const succeed = useCallback(() => {
    setActing(false)
    setActive(false)
  }, [])
  const fail = useCallback((props: {
    error: Error
    message?: string
  }): never => {
    setError(props.error)
    const message = props.message ?? props.error.message
    setErrorMessage(message)
    setActing(false)
    throw props.error
  }, [])
  const act = useCallback(async (actProps: Input): Promise<Output> => {
    start()
    try {
      const output = await props.action(actProps)
      succeed()
      return output
    } catch (error) {
      if (!(error instanceof Error)) {
        throw error
      }
      return fail({ error })
    }
  }, [props.action, fail, start, succeed])
  const value = useMemo(() => {
    const value: Action<Input, Output> = {
      act,
      activate,
      active,
      acting,
      deactivate,
      error,
      errorMessage,
      fail,
      start,
      succeed
    }
    return value
  }, [
    act,
    activate,
    active,
    acting,
    deactivate,
    error,
    errorMessage,
    fail,
    start,
    succeed
  ])
  return value
}
