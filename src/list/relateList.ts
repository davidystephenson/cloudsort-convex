import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'
import guard from '../arched/guard'

export default async function relateList (props: {
  authId?: Id<'users'>
  ctx: Ctx
  list: Doc<'lists'>
}): Promise<RelatedList> {
  const user = await guard({ ctx: props.ctx, id: props.list.userId })
  const related: RelatedList = {
    ...props.list,
    user: {
      _id: user._id,
      name: user.name
    }
  }
  return related
}
