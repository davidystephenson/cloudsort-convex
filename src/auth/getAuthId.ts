import { getAuthUserId } from '@convex-dev/auth/server'
import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'

export default async function getAuthId (props: {
  ctx: Ctx
}): Promise<Id<'users'> | undefined> {
  const userId = await getAuthUserId(props.ctx)
  if (userId == null) {
    return undefined
  }
  return userId
}
