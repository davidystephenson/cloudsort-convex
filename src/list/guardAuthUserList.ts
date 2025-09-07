import { Ctx } from '../arched/archedTypes'
import guardUserList from './guardUserList'
import { Doc, Id } from '../../convex/_generated/dataModel'
import guardAuthId from '../auth/guardAuthId'

export default async function guardAuthUserList (props: {
  ctx: Ctx
  listId: Id<'lists'>
}): Promise<Doc<'lists'>> {
  const userId = await guardAuthId({ ctx: props.ctx })
  const list = await guardUserList({ ctx: props.ctx, listId: props.listId, userId })
  return list
}
