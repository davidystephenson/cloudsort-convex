import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import getAuthId from '../auth/getAuthId'
import { RelatedList } from './listTypes'
import relateList from './relateList'

export default async function getRelatedList (props: {
  ctx: Ctx
  listId: Id<'lists'>
}): Promise<RelatedList | null> {
  const list = await props.ctx.db.get(props.listId)
  if (list == null) {
    return null
  }
  const authId = await getAuthId({ ctx: props.ctx })
  if (!list.public && list.userId !== authId) {
    return null
  }
  const related = await relateList({ ctx: props.ctx, authId, list })
  return related
}
