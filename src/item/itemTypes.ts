import { Infer, v } from 'convex/values'

export const itemDef = v.object({
  label: v.string(),
  seed: v.optional(v.number()),
  uid: v.string()
})
export type ItemDef = Infer<typeof itemDef>
