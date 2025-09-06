import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import getRelatedUser from './getRelatedUser'
import { RelatedUser } from './userTypes'

export default async function guardRelatedUser (props: {
  ctx: Ctx
  userId: Id<'users'>
  authId?: Id<'users'>
}): Promise<RelatedUser> {
  const user = await getRelatedUser(props)
  if (user == null) {
    throw new Error(`User ${props.userId} not found`)
  }
  return user
}
