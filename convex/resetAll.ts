import guardAuthId from '../src/auth/guardAuthId'
import { mutation } from './_generated/server'
import { ConvexError } from 'convex/values'
import schema from './schema'
import { overAll } from 'overpromise'

const resetAll = mutation({
  handler: async (ctx) => {
    const authId = await guardAuthId({ ctx })
    const auth = await ctx.db.get(authId)
    if (auth == null) {
      throw new ConvexError('User not found')
    }
    if (!auth.admin) {
      throw new ConvexError('Not an admin')
    }

    const promises: Array<Promise<void>> = []
    let tableName: keyof typeof schema.tables
    for (tableName in schema.tables) {
      const _delete = async function (): Promise<void> {
        const documents = await ctx.db.query(tableName).collect()
        await overAll(documents, async (doc) => {
          await ctx.db.delete(doc._id)
        })
      }
      promises.push(_delete())
    }
    await Promise.all(promises)
  }
})
export default resetAll
