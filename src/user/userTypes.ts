import { Doc } from '../../convex/_generated/dataModel'
import { RelatedList } from '../list/listTypes'

export interface RelatedUser extends Doc<'users'> {
  follower?: boolean
  followed?: boolean
}

export interface UserBundle {
  user: Doc<'users'>
  lists: RelatedList[]
}
