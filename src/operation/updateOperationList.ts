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
  const removed = existing.filter(
    (existing) => existing.index >= props.itemUids.length
  )
  await overAll(removed, async (removed) => {
    await props.ctx.db.delete(removed._id)
  })
  const updated = existing.filter(
    (existing) => existing.index < props.itemUids.length
  )
  await overAll(updated, async (existing, index) => {
    const itemUid = props.itemUids[index]
    if (itemUid == null) {
      throw new Error(`Item ${index} not found`)
    }
    if (itemUid === existing.itemUid) {
      return
    }
    await props.ctx.db.patch(existing._id, {
      itemUid
    })
  })
  await overAll(props.itemUids, async (itemUid, index) => {
    if (index < existing.length) {
      return
    }
    await props.ctx.db.insert(props.collection, {
      index,
      itemUid,
      operationUid: props.operationUid
    })
  })
}
