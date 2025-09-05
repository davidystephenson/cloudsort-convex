import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import guard from '../arched/guard'
import { RelatedUser } from './userTypes'

export default async function guardRelatedUser (props: {
  ctx: Ctx
  userId: Id<'users'>
  authId?: Id<'users'>
}): Promise<RelatedUser> {
  const user = await guard({ ctx: props.ctx, id: props.userId })
  const { authId } = props
  if (authId == null || user._id === props.authId) {
    return {
      ...user,
      follower: false,
      followed: false
    }
  }
  const follower = await props.ctx.db.query('follows')
    .withIndex('both', (q) => {
      return q.eq('followerId', authId).eq('followedId', user._id)
    })
    .first()
  const followed = await props.ctx.db.query('follows')
    .withIndex('both', (q) => {
      return q.eq('followerId', user._id).eq('followedId', authId)
    })
    .first()
  return {
    ...user,
    follower: follower != null,
    followed: followed != null
  }
}
