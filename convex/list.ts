import { query } from './_generated/server'
import { v } from 'convex/values'
import getAuthId from '../src/auth/getAuthId'
import getRelatedUser from '../src/user/getRelatedUser'
import getRelatedList from '../src/list/getRelatedList'
import relateImports from '../src/import/relateImports'
import { AuthList, RelatedList } from '../src/list/listTypes'
import { RelatedUser } from '../src/user/userTypes'

const list = query<any, any, Promise<{
  auth: RelatedUser | undefined
  list: AuthList | RelatedList | undefined
}>>({
  args: {
    listId: v.string()
  },
  handler: async (ctx, args) => {
    const authId = await getAuthId({ ctx })
    const auth = await getRelatedUser({ ctx, userId: authId, authId })
    const listId = ctx.db.normalizeId('lists', args.listId)
    if (listId == null) {
      return { auth, list: undefined }
    }
    const list = await getRelatedList({ ctx, listId })
    if (list == null) {
      return { auth, list: undefined }
    }
    if (list.userId !== authId) {
      if (list.public) {
        return { auth, list }
      }
      return { auth, list: undefined }
    }
    const choices = await ctx
      .db
      .query('choices')
      .withIndex('listId', (q) => q.eq('listId', listId))
      .collect()
    const imports = await ctx
      .db
      .query('imports')
      .withIndex('listId', (q) => q.eq('listId', listId))
      .collect()
    const relatedImports = await relateImports({ ctx, imports })
    const authList: AuthList = {
      ...list,
      choices,
      imports: relatedImports
    }
    const result: { auth: RelatedUser | undefined, list: AuthList } = { auth, list: authList }
    return result
  }
})
export default list
