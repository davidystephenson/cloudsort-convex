import { Doc, Id } from '../../convex/_generated/dataModel'
import { ConvexError } from 'convex/values'
import { Ctx } from '../arched/archedTypes'
import guard from '../arched/guard'

export default async function guardUserList (props: {
  ctx: Ctx
  listId: Id<'lists'>
  userId: Id<'users'>
}): Promise<Doc<'lists'>> {
  const list = await guard({ ctx: props.ctx, id: props.listId })
  if (list.userId !== props.userId) {
    throw new ConvexError('Unauthorized')
  }
  return list
}
