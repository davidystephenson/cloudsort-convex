import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'
import relateList from './relateList'
import { overAll } from 'overpromise'

export default async function relateLists (props: {
  authId?: Id<'users'>
  ctx: Ctx
  lists: Array<Doc<'lists'>>
}): Promise<RelatedList[]> {
  const relatedLists = await overAll(props.lists, async (list) => {
    const related = await relateList({ ctx: props.ctx, authId: props.authId, list })
    return related
  })
  return relatedLists
}
