import { Doc } from '../../convex/_generated/dataModel'
import { UserBase } from '../user/userTypes'

export interface RelatedList extends Doc<'lists'> {
  user: UserBase
}
