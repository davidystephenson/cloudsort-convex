import { Doc } from '../../convex/_generated/dataModel'

export interface ListRelation {
  userName: string
  userFollower: boolean
  userFollowed: boolean
}

export type RelatedList = Doc<'lists'> & ListRelation
