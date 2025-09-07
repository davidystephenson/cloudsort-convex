import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthUserList from '../src/list/guardAuthUserList'
import { overAll } from 'overpromise'
import { itemDef } from '../src/item/itemTypes'
import { importItems } from 'choice-sort'
import getListFlow from '../src/list/getListFlow'
import updateListFlow from '../src/list/updateListFlow'

const _import = mutation({
  args: {
    listId: v.id('lists'),
    items: v.array(itemDef)
  },
  handler: async (ctx, args) => {
    const list = await guardAuthUserList({ ctx, listId: args.listId })
    const listItems = await ctx
      .db
      .query('listItems')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    const importId = await ctx.db.insert('imports', {
      listId: args.listId
    })
    await overAll(args.items, async (item) => {
      const existingItem = await ctx
        .db
        .query('items')
        .withIndex('uid', (q) => q.eq('uid', item.uid)).unique()
      if (existingItem == null) {
        await ctx.db.insert('items', {
          label: item.label,
          uid: item.uid
        })
      }
      const listItemExists = listItems.some(
        (listItem) => listItem.itemUid === item.uid
      )
      if (listItemExists) {
        return
      }
      await ctx.db.insert('importItems', {
        importId,
        itemUid: item.uid,
        seed: item.seed
      })
    })
    const flow = await getListFlow({ ctx, list, listItems })
    const importedFlow = importItems({ flow, items: args.items })
    await updateListFlow({
      ctx,
      flow: importedFlow,
      listId: args.listId,
      listItems
    })
  }
})
export default _import
