import { overAll } from 'overpromise'
import { Id } from '../../convex/_generated/dataModel'
import { MutationCtx } from '../../convex/_generated/server'
import deleteAll from '../arched/deleteAll'
import deleteImport from '../import/deleteImport'
import deleteOperation from '../operation/deleteOperation'

export default async function deleteList (props: {
  ctx: MutationCtx
  id: Id<'lists'>
}): Promise<void> {
  await props.ctx.db.delete(props.id)
  const choices = await props.ctx.db.query('choices')
    .withIndex('listId', q => q.eq('listId', props.id))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: choices })
  const imports = await props.ctx.db.query('imports')
    .withIndex('listId', q => q.eq('listId', props.id))
    .collect()
  await overAll(imports, async (importDoc) => {
    await deleteImport({ ctx: props.ctx, id: importDoc._id })
  })
  const listItems = await props.ctx.db.query('listItems')
    .withIndex('listId', q => q.eq('listId', props.id))
    .collect()
  await deleteAll({ ctx: props.ctx, docs: listItems })
  const operations = await props.ctx.db.query('operations')
    .withIndex('listId', q => q.eq('listId', props.id))
    .collect()
  await overAll(operations, async (operationDoc) => {
    await deleteOperation({
      ctx: props.ctx, id: operationDoc._id, uid: operationDoc.uid
    })
  })
}
