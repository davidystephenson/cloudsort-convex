import { Doc, Id } from '../../convex/_generated/dataModel'

export interface UserBase {
  _id: Id<'users'>
  name: string
}

export interface RelatedList extends Doc<'lists'> {
  user: UserBase
}
