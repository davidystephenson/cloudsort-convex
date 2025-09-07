import { mutation } from './_generated/server'
import { v } from 'convex/values'
import guardAuthUserList from '../src/list/guardAuthUserList'
import { chooseOption } from 'choice-sort'
import getListFlow from '../src/list/getListFlow'
import updateListFlow from '../src/list/updateListFlow'
import getListItems from '../src/list/getListItems'

const choose = mutation({
  args: {
    listId: v.id('lists'),
    itemUid: v.string(),
    aChosen: v.boolean()
  },
  handler: async (ctx, args) => {
    const list = await guardAuthUserList({ ctx, listId: args.listId })
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
    const listItems = await getListItems({ ctx, listId: args.listId })
    const flow = await getListFlow({ ctx, list, listItems })
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
