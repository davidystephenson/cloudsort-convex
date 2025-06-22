import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'
import guardRelatedUser from '../user/guardRelatedUser'

export default async function relateList (props: {
  authId?: Id<'users'>
  ctx: Ctx
  list: Doc<'lists'>
}): Promise<RelatedList> {
  const user = await guardRelatedUser({
    authId: props.authId,
    ctx: props.ctx,
    userId: props.list.userId
  })
  const related: RelatedList = { ...props.list, user }
  return related
}
