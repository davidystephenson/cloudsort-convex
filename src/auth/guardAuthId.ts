import { getAuthUserId } from '@convex-dev/auth/server'
import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'

export default async function guardAuthId (props: {
  ctx: Ctx
}): Promise<Id<'users'>> {
  const userId = await getAuthUserId(props.ctx)
  if (userId == null) {
    throw new Error('Unauthenticated')
  }
  return userId
}
