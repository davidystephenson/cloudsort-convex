import { useConvexAuth } from 'convex/react'
import authUserQueryContext from './authUserQueryContext'

export default function useAuthLoading (): boolean {
  const convex = useConvexAuth()
  const authUser = authUserQueryContext.useMaybe()
  if (authUser == null) {
    return convex.isLoading
  }
  return convex.isLoading || authUser.loading
}
