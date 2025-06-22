import { ConvexError } from 'convex/values'
import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import guard from '../arched/guard'
import relateList from '../list/relateList'
import { UserBundle } from './userTypes'

export default async function guardUserBundle (props: {
  ctx: Ctx
  userId: Id<'users'>
}): Promise<UserBundle> {
  try {
    const user = await guard({ ctx: props.ctx, id: props.userId })
    const listDocs = await props.ctx
      .db
      .query('lists')
      .withIndex('userPublic', (q) => q.eq('userId', props.userId).eq('public', true))
      .collect()
    if (listDocs.length === 0) {
      const followerDocs = await props.ctx
        .db
        .query('follows')
        .withIndex('follower', (q) => q.eq('followerId', props.userId))
        .collect()
      if (followerDocs.length === 0) {
        const followedDocs = await props.ctx
          .db
          .query('follows')
          .withIndex('followed', (q) => q.eq('followedId', props.userId))
          .collect()
        if (followedDocs.length === 0) {
          throw new Error()
        }
      }
    }
    const listPromises = listDocs.map(async (doc) => {
      const list = await relateList({ ctx: props.ctx, list: doc })
      return list
    })
    const lists = await Promise.all(listPromises)
    return { user, lists }
  } catch (error) {
    throw new ConvexError('User not found')
  }
}
