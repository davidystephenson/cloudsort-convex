import { getAuthUserId } from '@convex-dev/auth/server'
import { Doc } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'

export default async function getUser (props: { ctx: Ctx }): Promise<Doc<'users'> | undefined> {
  const userId = await getAuthUserId(props.ctx)
  if (userId == null) {
    return undefined
  }
  const user = await props.ctx.db.get(userId)
  if (user == null) {
    throw new Error(`Authenticated user ${userId} not found`)
  }
  return user
}
