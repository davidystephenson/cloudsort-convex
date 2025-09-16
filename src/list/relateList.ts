import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'
import guardRelatedUser from '../user/guardRelatedUser'
import { overAll } from 'overpromise'
import getListItems from './getListItems'

export default async function relateList (props: {
  authId?: Id<'users'>
  ctx: Ctx
  hides?: Array<Doc<'hides'>>
  list: Doc<'lists'>
}): Promise<RelatedList> {
  const user = await guardRelatedUser({
    authId: props.authId,
    ctx: props.ctx,
    userId: props.list.userId
  })
  const self = props.authId === props.list.userId
  const listItems = await getListItems({
    ctx: props.ctx,
    hides: self ? undefined : props.hides,
    listId: props.list._id
  })
  const ranked = listItems.sort((a, b) => a.rank - b.rank)
  const relatedListItems = await overAll(ranked, async (listItem) => {
    const item = await props.ctx
      .db
      .query('items')
      .withIndex('uid', (q) => q.eq('uid', listItem.itemUid)).unique()
    if (item == null) {
      throw new Error(`Item ${listItem.itemUid} not found`)
    }
    return { ...listItem, item }
  })
  const related: RelatedList = {
    ...props.list,
    listItems: relatedListItems,
    user
  }
  return related
}
