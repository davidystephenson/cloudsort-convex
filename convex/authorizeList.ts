import { v } from 'convex/values'
import { query } from './_generated/server'
import { overAll } from 'overpromise'
import { RelatedImport } from '../src/episode/episodeTypes'

const authorizeList = query({
  args: {
    listId: v.id('lists')
  },
  handler: async (ctx, args) => {
    const choices = await ctx
      .db
      .query('choices')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const imports = await ctx
      .db
      .query('imports')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const relatedImports: RelatedImport[] = await overAll(imports, async (_import) => {
      const importItems = await ctx
        .db
        .query('importItems')
        .withIndex('importId', (q) => q.eq('importId', _import._id))
        .collect()
      return { ..._import, importItems }
    })
    return { choices, imports: relatedImports }
  }
})
export default authorizeList
