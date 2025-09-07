import { JSX } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { FullCellRobe } from 'robes'
import episodeContext from '../episode/episodeContext'
import EpisodeTitle from '../episode/EpisodeTitle'
import { ImportEpisode } from '../episode/episodeTypes'
import { AuthListImport } from '../list/listTypes'
import authListContext from '../list/authListContext'

export default function AuthListImportCells (props: AuthListImport): JSX.Element {
  const authList = authListContext.use()
  const _import = authList.list.imports.find((_import) => _import._id === props.importId)
  if (_import == null) {
    throw new Error('import not found')
  }
  const episode: ImportEpisode = {
    ..._import,
    type: 'import'
  }
  return (
    <episodeContext.Provider episode={episode}>
      <FullCellRobe>
        <EpisodeTitle>
          <BsCloudUpload />
          <span>{_import.importItems.length}</span>
        </EpisodeTitle>
      </FullCellRobe>
    </episodeContext.Provider>
  )
}
