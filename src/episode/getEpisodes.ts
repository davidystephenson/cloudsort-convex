import { Id } from '../../convex/_generated/dataModel'
import { Ctx } from '../arched/archedTypes'
import relateImports from '../import/relateImports'
import { Episodes } from './episodeTypes'

export default async function getEpisodes (props: {
  ctx: Ctx
  listId: Id<'lists'>
}): Promise<Episodes> {
  const choices = await props.ctx
    .db
    .query('choices')
    .withIndex('listId', (q) => q.eq('listId', props.listId))
    .collect()
  const imports = await props.ctx
    .db
    .query('imports')
    .withIndex('listId', (q) => q.eq('listId', props.listId))
    .collect()
  const relatedImports = await relateImports({ ctx: props.ctx, imports })
  return {
    choices,
    imports: relatedImports
  }
}
