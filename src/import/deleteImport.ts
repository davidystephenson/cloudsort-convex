import { Id } from '../../convex/_generated/dataModel'
import { MutationCtx } from '../../convex/_generated/server'
import deleteAll from '../arched/deleteAll'

export default async function deleteImport (props: {
  ctx: MutationCtx
  id: Id<'imports'>
}): Promise<void> {
  const importItems = await props.ctx.db.query('importItems')
    .withIndex('importId', q => q.eq('importId', props.id))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: importItems })
}
