import { useConvexAuth } from 'convex/react'
import authContext from './authContext'

export default function useAuthLoading (): boolean {
  const convex = useConvexAuth()
  const authUser = authContext.query.useMaybe()
  if (authUser.provided) {
    return convex.isLoading || authUser.value.loading
  }
  return convex.isLoading
}
