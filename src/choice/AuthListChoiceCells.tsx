import { JSX } from 'react'
import EpisodeTitle from '../episode/EpisodeTitle'
import episodeContext from '../episode/episodeContext'
import { AuthListChoice } from '../list/listTypes'
import ChoiceLabel from './ChoiceLabel'

export default function AuthListChoiceCells (props: AuthListChoice): JSX.Element {
  return (
    <episodeContext.Provider episode={props.episode}>
      <EpisodeTitle>
        <ChoiceLabel chosen={props.episode.aChosen} label={props.aItem.item.label} />
        <ChoiceLabel chosen={!props.episode.aChosen} label={props.bItem.item.label} />
      </EpisodeTitle>
    </episodeContext.Provider>
  )
}
