import { mutation } from './_generated/server'
import { ConvexError, v } from 'convex/values'
import guardAuthUserList from '../src/list/guardAuthUserList'
import { chooseOption, getRanking } from 'choice-sort'
import getListFlow from '../src/list/getListFlow'
import updateListFlow from '../src/list/updateListFlow'
import getListItems from '../src/list/getListItems'
import guardFind from '../src/guardFInd/guardFind'
const choose = mutation({
  args: {
    listId: v.id('lists'),
    itemUid: v.string(),
    aChosen: v.boolean()
  },
  handler: async (ctx, args) => {
    const list = await guardAuthUserList({ ctx, listId: args.listId })
    if (list.a == null) {
      throw new ConvexError('List a is null')
    }
    if (list.b == null) {
      throw new ConvexError('List b is null')
    }
    if (args.aChosen && list.a !== args.itemUid) {
      throw new ConvexError(`a is not ${args.itemUid}`)
    } else if (!args.aChosen && list.b !== args.itemUid) {
      throw new ConvexError(`b is not ${args.itemUid}`)
    }
    const listItems = await getListItems({ ctx, listId: args.listId })
    const flow = await getListFlow({ ctx, list, listItems })
    const ranking = getRanking({ flow })
    const a = guardFind({
      array: ranking,
      find: (item) => item.uid === list.a,
      label: 'a'
    })
    const b = guardFind({
      array: ranking,
      find: (item) => item.uid === list.b,
      label: 'b'
    })
    await ctx.db.insert('choices', {
      aChosen: args.aChosen,
      aPoints: a.points,
      aUid: list.a,
      bPoints: b.points,
      bUid: list.b,
      listId: args.listId
    })
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
