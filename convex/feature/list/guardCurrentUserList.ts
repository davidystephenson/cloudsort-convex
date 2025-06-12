import { Ctx } from '../convex/convexTypes'
import guardUserList from './guardUserList'
import { Doc, Id } from '../../_generated/dataModel'
import guardCurrentUserId from './guardCurrentUserId'

export default async function guardCurrentUserList (props: {
  ctx: Ctx
  listId: Id<'lists'>
}): Promise<Doc<'lists'>> {
  const userId = await guardCurrentUserId({ ctx: props.ctx })
  const list = await guardUserList({ ctx: props.ctx, listId: props.listId, userId })
  return list
}
