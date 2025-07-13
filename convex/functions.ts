import { mutation as rawMutation, internalMutation as rawInternalMutation } from './_generated/server'
import { DataModel } from './_generated/dataModel'
import { Triggers } from 'convex-helpers/server/triggers'
import { customCtx, customMutation } from 'convex-helpers/server/customFunctions'
import deleteAll from '../src/arched/deleteAll'

const triggers = new Triggers<DataModel>()

triggers.register('users', async (ctx, change) => {
  if (change.operation !== 'delete') {
    return
  }
  const lists = await ctx.db.query('lists')
    .withIndex('user', q => q.eq('userId', change.id))
    .collect()
  await deleteAll({ ctx, docs: lists })
})
triggers.register('lists', async (ctx, change) => {
  if (change.operation !== 'delete') {
    return
  }
  const choices = await ctx.db.query('choices')
    .withIndex('listId', q => q.eq('listId', change.id))
    .collect()
  await deleteAll({ ctx, docs: choices })
  const imports = await ctx.db.query('imports')
    .withIndex('listId', q => q.eq('listId', change.id))
    .collect()
  await deleteAll({ ctx, docs: imports })
  const listItems = await ctx.db.query('listItems')
    .withIndex('listId', q => q.eq('listId', change.id))
    .collect()
  await deleteAll({ ctx, docs: listItems })
  const operations = await ctx.db.query('operations')
    .withIndex('listId', q => q.eq('listId', change.id))
    .collect()
  await deleteAll({ ctx, docs: operations })
})
triggers.register('imports', async (ctx, change) => {
  if (change.operation !== 'delete') {
    return
  }
  const importItems = await ctx.db.query('importItems')
    .withIndex('importId', q => q.eq('importId', change.id))
    .collect()
  await deleteAll({ ctx, docs: importItems })
})
triggers.register('operations', async (ctx, change) => {
  if (change.operation !== 'delete') {
    return
  }
  const catalogs = await ctx.db.query('catalogs')
    .withIndex('operationUid', q => q.eq('operationUid', change.id))
    .collect()
  await deleteAll({ ctx, docs: catalogs })
  const outputs = await ctx.db.query('outputs')
    .withIndex('operationUid', q => q.eq('operationUid', change.id))
    .collect()
  await deleteAll({ ctx, docs: outputs })
  const queues = await ctx.db.query('queues')
    .withIndex('operationUid', q => q.eq('operationUid', change.id))
    .collect()
  await deleteAll({ ctx, docs: queues })
})

export const mutation = customMutation(rawMutation, customCtx(triggers.wrapDB))
export const internalMutation = customMutation(rawInternalMutation, customCtx(triggers.wrapDB))
