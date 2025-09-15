import { getAuthUserId } from '@convex-dev/auth/server'
import { Doc } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'

export default async function getAuth (props: { ctx: Ctx }): Promise<Doc<'users'> | undefined> {
  const authId = await getAuthUserId(props.ctx)
  if (authId == null) {
    return undefined
  }
  const user = await props.ctx.db.get(authId)
  return user ?? undefined
}
