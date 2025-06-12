import { Id } from '../../_generated/dataModel'
import { Ctx } from '../convex/convexTypes'
import getCurrentUserId from './gaurdCurrentUserId'

export default async function guardCurrentUserId (props: {
  ctx: Ctx
}): Promise<Id<'users'>> {
  const userId = await getCurrentUserId(props)
  if (userId == null) {
    throw new Error('Unauthorized')
  }
  return userId
}
