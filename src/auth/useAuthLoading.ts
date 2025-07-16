import { useConvexAuth } from 'convex/react'
import getAuthContext from './getAuthContext'

export default function useAuthLoading (): boolean {
  const convex = useConvexAuth()
  const authUser = getAuthContext.query.useMaybe()
  if (authUser.provided) {
    return convex.isLoading || authUser.value.loading
  }
  return convex.isLoading
}
