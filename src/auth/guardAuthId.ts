import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import getAuthId from './getAuthId'

export default async function guardAuthId (props: {
  ctx: Ctx
}): Promise<Id<'users'>> {
  const userId = await getAuthId(props)
  if (userId == null) {
    throw new Error('Unauthenticated')
  }
  return userId
}
