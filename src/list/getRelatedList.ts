import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'
import relateList from './relateList'

export default async function getRelatedList (props: {
  authId: Id<'users'> | undefined
  ctx: Ctx
  listId: Id<'lists'>
}): Promise<RelatedList | null> {
  const list = await props.ctx.db.get(props.listId)
  if (list == null) {
    return null
  }
  const self = props.authId === list.userId
  if (!list.public && !self) {
    return null
  }
  const hides = await props.ctx.db.query('hides').withIndex('userItem',
    (q) => q.eq('userId', list.userId)
  ).collect()
  const related = await relateList({
    authId: props.authId,
    ctx: props.ctx,
    hides: self ? undefined : hides,
    list
  })
  return related
}
