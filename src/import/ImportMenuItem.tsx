import { JSX } from 'react'
import { FileMenuItemRobe } from 'robes'
import Papa from 'papaparse'
import { critickerSchema } from '../criticker/critickerTypes'
import { ItemDef } from '../item/itemTypes'
import importContext from './importContext'
import listContext from '../list/listContext'

export default function ImportMenuItem (): JSX.Element {
  const _import = importContext.use()
  const list = listContext.use()
  function handleFile (props: {
    file: File
  }): void {
    Papa.parse(props.file, {
      header: true,
      skipEmptyLines: true,
      complete: (props) => {
        try {
          const critickers = critickerSchema.array().parse(props.data)
          const items: ItemDef[] = critickers.map((criticker) => {
            return {
              label: criticker[' Film Name'],
              seed: Number(criticker.Score),
              uid: criticker[' IMDB ID']
            }
          })
          void _import.act({
            listId: list._id,
            items
          })
        } catch (error) {
          if (!(error instanceof Error)) {
            throw error
          }
          console.error(error)
          _import.fail({
            error,
            message: error.message
          })
        }
      }
    })
  }
  return <FileMenuItemRobe onFile={handleFile}>Import Items</FileMenuItemRobe>
}
