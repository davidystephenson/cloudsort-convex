import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'
import guardAuthUserList from '../src/list/guardAuthUserList'
import getEpisodes from '../src/episode/getEpisodes'
import { chooseOption, Flow, importItems } from 'choice-sort'
import getSortedEpisodes from '../src/episode/getSortedEpisodes'
import updateListFlow from '../src/list/updateListFlow'
import getListItems from '../src/list/getListItems'
import { ItemDef } from '../src/item/itemTypes'
import { overAll } from 'overpromise'
import deleteImport from '../src/import/deleteImport'

const rewindList = mutation({
  args: {
    episodeId: v.union(v.id('choices'), v.id('imports')),
    listId: v.id('lists')
  },
  handler: async (ctx, args) => {
    const list = await guardAuthUserList({ ctx, listId: args.listId })
    const episodes = await getEpisodes({ ctx, listId: args.listId })
    console.log('episodes', episodes)
    const sortedEpisodes = getSortedEpisodes(episodes)
    const index = sortedEpisodes.findIndex((ep) => ep._id === args.episodeId)
    if (index === -1) {
      const message = `Episode ${args.episodeId} not found in list ${args.listId}`
      throw new ConvexError(message)
    }
    const rewound = sortedEpisodes.slice(index)
    await overAll(rewound, async (episode) => {
      if (episode.type === 'choice') {
        await ctx.db.delete(episode._id)
      } else if (episode.type === 'import') {
        await deleteImport({ ctx, importId: episode._id })
      }
    })
    const kept = sortedEpisodes.slice(0, index)
    let flow: Flow = {
      uid: list._id,
      count: 0,
      items: {},
      operations: {}
    }
    for (const episode of kept) {
      if (episode.type === 'choice') {
        const option = episode.aChosen ? episode.aUid : episode.bUid
        flow = chooseOption({ flow, option })
      }
      if (episode.type === 'import') {
        const itemDefs: ItemDef[] = await overAll(episode.importItems, async (importItem) => {
          const item = await ctx
            .db
            .query('items')
            .withIndex('uid', (q) => q.eq('uid', importItem.itemUid))
            .unique()
          if (item == null) {
            throw new Error(`Item ${importItem.itemUid} not found`)
          }
          return { label: item.label, uid: importItem.itemUid, seed: importItem.seed }
        })
        flow = importItems({ flow, items: itemDefs })
      } else {
        throw new Error(`Unknown episode type: ${episode.type}`)
      }
    }
    const listItems = await getListItems({ ctx, listId: args.listId })
    await updateListFlow({
      ctx,
      flow,
      listId: args.listId,
      listItems
    })
  }
})

export default rewindList
