import { JSX } from 'react'
import { FullCellRobe } from 'robes'
import authorizeListContext from '../auth/authorizeListContext'
import EpisodeTitle from '../episode/EpisodeTitle'
import episodeContext from '../episode/episodeContext'
import { ChoiceEpisode } from '../episode/episodeTypes'
import listContext from '../list/listContext'
import { AuthListChoice } from '../list/listTypes'
import ChoiceLabel from './ChoiceLabel'

export default function AuthListChoiceCells (props: AuthListChoice): JSX.Element {
  const authorization = authorizeListContext.data.use()
  const list = listContext.use()
  const choice = authorization.choices.find(
    (choice) => choice._id === props.choiceId
  )
  if (choice == null) {
    throw new Error('import not found')
  }
  const aListItem = list.listItems.find(
    (listItem) => listItem.item.uid === choice.aUid
  )
  if (aListItem == null) {
    throw new Error(`List item ${choice.aUid} not found in list`)
  }
  const bListItem = list.listItems.find(
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
      <FullCellRobe>
        <EpisodeTitle>
          <ChoiceLabel chosen={choice.aChosen} label={aListItem.item.label} />
          <ChoiceLabel chosen={!choice.aChosen} label={bListItem.item.label} />
        </EpisodeTitle>
      </FullCellRobe>
    </episodeContext.Provider>
  )
}
