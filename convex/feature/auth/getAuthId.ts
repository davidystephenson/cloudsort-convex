import { getAuthUserId } from '@convex-dev/auth/server'
import { Id } from '../../_generated/dataModel'
import { Ctx } from '../convex/convexTypes'

export default async function getAuthId (props: {
  ctx: Ctx
}): Promise<Id<'users'> | undefined> {
  const userId = await getAuthUserId(props.ctx)
  if (userId == null) {
    return undefined
  }
  return userId
}
