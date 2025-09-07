import { overAll } from 'overpromise'
import { RelatedImport } from '../episode/episodeTypes'
import { Ctx } from '../arched/archedTypes'
import { Doc } from '../../convex/_generated/dataModel'

export default async function relateImports (props: {
  ctx: Ctx
  imports: Array<Doc<'imports'>>
}): Promise<RelatedImport[]> {
  const relatedImports: RelatedImport[] = await overAll(props.imports, async (_import) => {
    const importItems = await props.ctx
      .db
      .query('importItems')
      .withIndex('importId', (q) => q.eq('importId', _import._id))
      .collect()
    return { ..._import, importItems }
  })
  return relatedImports
}
