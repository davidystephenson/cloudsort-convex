import { overAll } from 'overpromise'
import { Id } from '../../convex/_generated/dataModel'
import { MutationCtx } from '../../convex/_generated/server'
import deleteList from '../list/deleteList'

export default async function deleteUser (props: {
  ctx: MutationCtx
  id: Id<'users'>
}): Promise<void> {
  const lists = await props.ctx.db.query('lists')
    .withIndex('user', q => q.eq('userId', props.id))
    .collect()
  await overAll(lists, async (listDoc) => {
    await deleteList({ ctx: props.ctx, id: listDoc._id })
  })
}
