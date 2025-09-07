import { Id } from '../../convex/_generated/dataModel'
import { MutationCtx } from '../../convex/_generated/server'
import deleteAll from '../arched/deleteAll'

export default async function deleteImport (props: {
  ctx: MutationCtx
  importId: Id<'imports'>
}): Promise<void> {
  await props.ctx.db.delete(props.importId)
  const importItems = await props.ctx.db.query('importItems')
    .withIndex('importId', q => q.eq('importId', props.importId))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: importItems })
}
