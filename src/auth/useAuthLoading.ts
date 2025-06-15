import { useConvexAuth } from 'convex/react'
import authUserQueryContext from './authUserQueryContext'

export default function useAuthLoading (): boolean {
  const convex = useConvexAuth()
  const authUser = authUserQueryContext.useMaybe()
  if (authUser.provided) {
    return convex.isLoading || authUser.value.loading
  }
  return convex.isLoading
}
