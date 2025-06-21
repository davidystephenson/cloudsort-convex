import { GenericId } from 'convex/values'
import { Ctx } from './archedTypes'
import { DocumentByName, TableNamesInDataModel } from 'convex/server'
import { DataModel } from '../../convex/_generated/dataModel'

export default async function guard<
TableName extends TableNamesInDataModel<DataModel>
> (props: {
  ctx: Ctx
  id: GenericId<TableName>
}): Promise<DocumentByName<DataModel, TableName>> {
  const doc = await props.ctx.db.get(props.id)
  if (doc == null) {
    throw new Error(`${props.id} not found`)
  }
  return doc
}
