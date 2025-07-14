import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthList from '../src/list/guardAuthList'
import { chooseOption, getChoice } from 'choice-sort'
import getListFlow from '../src/list/getListFlow'
import updateListFlow from '../src/list/updateListFlow'

const choose = mutation({
  args: {
    listId: v.id('lists'),
    itemUid: v.string(),
    aChosen: v.boolean()
  },
  handler: async (ctx, args) => {
    const list = await guardAuthList({ ctx, listId: args.listId })
    const listItems = await ctx
      .db
      .query('listItems')
      .withIndex('listId', (q) => q.eq('listId', args.listId))
      .collect()
    if (list.a == null) {
      throw new Error('List a is null')
    }
    if (list.b == null) {
      throw new Error('List b is null')
    }
    if (args.aChosen && list.a !== args.itemUid) {
      throw new Error(`a is not ${args.itemUid}`)
    } else if (!args.aChosen && list.b !== args.itemUid) {
      throw new Error(`b is not ${args.itemUid}`)
    }
    await ctx.db.insert('choices', {
      listId: args.listId,
      aUid: list.a,
      bUid: list.b,
      aChosen: args.aChosen
    })
    const flow = await getListFlow({ ctx, list, listItems })
    const operations = Object.values(flow.operations)
    operations.forEach((operation) => {
      console.log('Operation UID:', operation.uid)
      console.log('Operation Better:', operation.better)
      console.log('Operation Catalog:', operation.catalog)
      console.log('Operation Queue:', operation.queue)
      console.log('Operation Output:', operation.output)
    })
    console.log('args.itemUid', args.itemUid)
    const choice = getChoice({ flow })
    console.log('choice', choice)
    const chosenFlow = chooseOption({ flow, option: args.itemUid })
    await updateListFlow({
      ctx,
      flow: chosenFlow,
      listId: args.listId,
      listItems
    })
  }
})
export default choose
