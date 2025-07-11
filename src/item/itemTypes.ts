import { Infer, v } from 'convex/values'
import { Doc } from '../../convex/_generated/dataModel'

export const itemDef = v.object({
  label: v.string(),
  seed: v.optional(v.number()),
  uid: v.string()
})
export type ItemDef = Infer<typeof itemDef>

export interface RelatedListItem extends Doc<'listItems'> {
  item: Doc<'items'>
}
