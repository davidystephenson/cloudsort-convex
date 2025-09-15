import { JSX } from 'react'
import EpisodeTitle from '../episode/EpisodeTitle'
import episodeContext from '../episode/episodeContext'
import { ChoiceEpisode } from '../episode/episodeTypes'
import { AuthListChoice } from '../list/listTypes'
import ChoiceLabel from './ChoiceLabel'
import authListContext from '../list/authListContext'

export default function AuthListChoiceCells (props: AuthListChoice): JSX.Element {
  const authList = authListContext.use()
  const choice = authList.list.choices.find(
    (choice) => choice._id === props.choiceId
  )
  if (choice == null) {
    throw new Error('import not found')
  }
  const aListItem = authList.list.listItems.find(
    (listItem) => listItem.item.uid === choice.aUid
  )
  if (aListItem == null) {
    throw new Error(`List item ${choice.aUid} not found in list`)
  }
  const bListItem = authList.list.listItems.find(
    (listItem) => listItem.item.uid === choice.bUid
  )
  if (bListItem == null) {
    throw new Error(`List item ${choice.bUid} not found in list`)
  }
  const episode: ChoiceEpisode = {
    ...choice,
    type: 'choice'
  }
  return (
    <episodeContext.Provider episode={episode}>
      <EpisodeTitle>
        <ChoiceLabel chosen={choice.aChosen} label={aListItem.item.label} />
        <ChoiceLabel chosen={!choice.aChosen} label={bListItem.item.label} />
      </EpisodeTitle>
    </episodeContext.Provider>
  )
}
