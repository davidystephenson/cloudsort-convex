import { JSX } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import episodeContext from '../episode/episodeContext'
import EpisodeTitle from '../episode/EpisodeTitle'
import { AuthListImport } from '../list/listTypes'

export default function AuthListImportCells (props: AuthListImport): JSX.Element {
  return (
    <episodeContext.Provider episode={props.episode}>
      <EpisodeTitle>
        <BsCloudUpload />
        <span>{props.episode.importItems.length}</span>
      </EpisodeTitle>
    </episodeContext.Provider>
  )
}
