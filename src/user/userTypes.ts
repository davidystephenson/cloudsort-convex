import { Id } from '../../convex/_generated/dataModel'

export interface UserBase {
  _id: Id<'users'>
  name: string
}

export interface RelatedUser extends UserBase {
  follower: boolean
  followed: boolean
}
