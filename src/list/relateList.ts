import { ConvexError } from 'convex/values'
import { Doc, Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import { RelatedList } from './listTypes'

export default async function relateList (props: {
  authId?: Id<'users'>
  ctx: Ctx
  list: Doc<'lists'>
}): Promise<RelatedList> {
  const user = await props.ctx.db.get(props.list.userId)
  if (user === null) {
    throw new ConvexError('User not found')
  }
  const related = {
    ...props.list,
    userName: user.name
  }
  if (props.authId == null) {
    return {
      ...related,
      userFollowed: false,
      userFollower: false
    }
  }
  const { authId } = props
  console.log('authId', authId)
  console.log('list.userId', props.list.userId)
  const followed = await props.ctx.db.query('follows')
    .withIndex('both', q => q.eq('followerId', authId).eq('followedId', props.list.userId))
    .first()
  const follower = await props.ctx.db.query('follows')
    .withIndex('both', q => q.eq('followerId', props.list.userId).eq('followedId', authId))
    .first()
  return {
    ...related,
    userFollowed: followed !== null,
    userFollower: follower !== null
  }
}
