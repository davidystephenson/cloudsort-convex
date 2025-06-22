import { Doc, Id } from '../../convex/_generated/dataModel'
import { RelatedList } from '../list/listTypes'

export interface UserBase {
  _id: Id<'users'>
  name: string
}

export interface RelatedUser extends UserBase {
  follower: boolean
  followed: boolean
}

export interface UserBundle {
  user: Doc<'users'>
  lists: RelatedList[]
}
