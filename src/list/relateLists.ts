import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'
import relateList from './relateList'

export default async function relateLists (props: {
  authId?: Id<'users'>
  ctx: Ctx
  lists: Array<Doc<'lists'>>
}): Promise<RelatedList[]> {
  const promises = props.lists.map(async (list) => {
    const related = await relateList({ ctx: props.ctx, authId: props.authId, list })
    return related
  })
  const relatedLists = await Promise.all(promises)
  return relatedLists
}
