import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'

export default async function getListItems (props: {
  ctx: Ctx
  hides?: Array<Doc<'hides'>>
  listId: Id<'lists'>
}): Promise<Array<Doc<'listItems'>>> {
  const listItems = await props.ctx
    .db
    .query('listItems')
    .withIndex('listId', (q) => q.eq('listId', props.listId))
    .collect()
  if (props.hides == null) {
    return listItems
  }
  const hiddenUids = new Set(props.hides.map((hide) => hide.itemUid))
  const filtered = listItems.filter((listItem) => !hiddenUids.has(listItem.itemUid))
  return filtered
}
