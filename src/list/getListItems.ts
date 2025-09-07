import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'

export default async function getListItems (props: {
  ctx: Ctx
  listId: Id<'lists'>
}): Promise<Array<Doc<'listItems'>>> {
  const listItems = await props.ctx
    .db
    .query('listItems')
    .withIndex('listId', (q) => q.eq('listId', props.listId))
    .collect()
  return listItems
}
