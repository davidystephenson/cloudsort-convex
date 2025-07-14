import { Id } from '../../convex/_generated/dataModel'
import { MutationCtx } from '../../convex/_generated/server'
import deleteAll from '../arched/deleteAll'

export default async function deleteOperation (props: {
  ctx: MutationCtx
  id: Id<'operations'>
  uid: string
}): Promise<void> {
  await props.ctx.db.delete(props.id)
  const catalogs = await props.ctx.db.query('catalogs')
    .withIndex('operationUid', q => q.eq('operationUid', props.uid))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: catalogs })
  const outputs = await props.ctx.db.query('outputs')
    .withIndex('operationUid', q => q.eq('operationUid', props.uid))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: outputs })
  const queues = await props.ctx.db.query('queues')
    .withIndex('operationUid', q => q.eq('operationUid', props.uid))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: queues })
}
