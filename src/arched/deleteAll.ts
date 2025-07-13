import { overAll } from 'overpromise'
import { Doc, TableNames } from '../../convex/_generated/dataModel'
import { MutationCtx } from '../../convex/_generated/server'

export default async function deleteAll (props: {
  ctx: MutationCtx
  docs: Array<Doc<TableNames>>
}): Promise<void> {
  await overAll(props.docs, async (doc) => {
    await props.ctx.db.delete(doc._id)
  })
}
