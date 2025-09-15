import { JSX } from 'react'
import useAuthListRows from './useAuthListRows'
import LayoutTable from '../layout/LayoutTable'
import marion from 'marion'
import AuthListColumnsCells from './AuthListColumnsCells'
import AuthListItemCells from './AuthListItemCells'
import AuthListItemsCells from './AuthListItemsCells'
import filterAuthList from '../item/filterAuthList'
import AuthListEpisodesCells from './AuthListEpisodesCells'
import AuthListImportCells from '../import/AuthListImportCells'
import AuthListChoiceCells from '../choice/AuthListChoiceCells'
import AuthListImportItemCells from '../import/AuthListImportItemCells'
import AuthListChoiceItemCells from '../choice/AuthListChoiceItemCells'

export default function AuthListTable (): JSX.Element {
  const rows = useAuthListRows()
  console.log('AuthListTable rows', rows)
  const random = Math.random()
  return (
    <LayoutTable
      Cells={(props) => {
        console.log('random', random)
        console.log('props.index', props.index)
        console.log('props.row', props.row)
        console.log('cells rows', rows)
        const isRow = rows.includes(props.row)
        console.log('isRow', isRow)
        const actors = {
          columns: AuthListColumnsCells,
          item: AuthListItemCells,
          items: AuthListItemsCells,
          episodes: AuthListEpisodesCells,
          import: AuthListImportCells,
          importItem: AuthListImportItemCells,
          choice: AuthListChoiceCells,
          choiceItem: AuthListChoiceItemCells
        }
        return marion(actors, props.row)
      }}
      columns={['Movies', 'Points']}
      onSearch={(props) => {
        return filterAuthList({
          row: props.row,
          query: props.query
        })
      }}
      rows={rows}
    />
  )
}
