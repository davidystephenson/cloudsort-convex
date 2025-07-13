import { MutationCtx } from '../../convex/_generated/server'
import deleteAll from '../arched/deleteAll'

export default async function deleteOperation (props: {
  ctx: MutationCtx
  id: string
}): Promise<void> {
  const catalogs = await props.ctx.db.query('catalogs')
    .withIndex('operationUid', q => q.eq('operationUid', props.id))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: catalogs })
  const outputs = await props.ctx.db.query('outputs')
    .withIndex('operationUid', q => q.eq('operationUid', props.id))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: outputs })
  const queues = await props.ctx.db.query('queues')
    .withIndex('operationUid', q => q.eq('operationUid', props.id))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: queues })
}
