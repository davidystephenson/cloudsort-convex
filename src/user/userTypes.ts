import { Doc } from '../../convex/_generated/dataModel'

export interface RelatedUser extends Doc<'users'> {
  follower?: boolean
  followed?: boolean
}
