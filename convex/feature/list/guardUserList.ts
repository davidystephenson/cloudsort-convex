import { Doc, Id } from '../../_generated/dataModel'
import { ConvexError } from 'convex/values'
import { Ctx } from '../convex/convexTypes'

export default async function guardUserList (props: {
  ctx: Ctx
  listId: Id<'lists'>
  userId: Id<'users'>
}): Promise<Doc<'lists'>> {
  const list = await props.ctx.db.get(props.listId)
  if (list == null) {
    throw new ConvexError('List not found')
  }
  if (list.userId !== props.userId) {
    throw new ConvexError('Unauthorized')
  }
  return list
}
