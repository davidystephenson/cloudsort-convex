import { Doc } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import guardAuthId from './guardAuthId'

export default async function guardAuth (props: {
  ctx: Ctx
}): Promise<Doc<'users'>> {
  const userId = await guardAuthId(props)
  const user = await props.ctx.db.get(userId)
  if (user == null) {
    throw new Error('Unauthenticated')
  }
  return user
}
