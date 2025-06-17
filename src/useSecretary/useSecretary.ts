import { useMemo } from "react"

export default function useSecretary <Value extends object> (props: Value): Value {
  const dependencies = Object.values(props)
  return useMemo(() => props, dependencies)
}