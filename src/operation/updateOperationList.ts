import { overAll } from 'overpromise'
import { MutationCtx } from '../../convex/_generated/server'

export default async function updateOperationList (props: {
  collection: 'catalogs' | 'outputs' | 'queues'
  ctx: MutationCtx
  itemUids: string[]
  operationUid: string
}): Promise<void> {
  const existing = await props.ctx
    .db
    .query(props.collection)
    .withIndex('operationUid', (q) => {
      return q.eq('operationUid', props.operationUid)
    })
    .collect()
  await overAll(existing, async (existing) => {
    const removed = existing.index >= props.itemUids.length
    if (removed) {
      await props.ctx.db.delete(existing._id)
    }
  })
  await overAll(props.itemUids, async (item, index) => {
    const existingDoc = existing.find((existing) => existing.index === index)
    if (existingDoc != null) {
      await props.ctx.db.patch(existingDoc._id, {
        itemUid: item
      })
    } else {
      await props.ctx.db.insert(props.collection, {
        index,
        itemUid: item,
        operationUid: props.operationUid
      })
    }
  })
}
