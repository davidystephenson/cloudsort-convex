import { JSX } from 'react'
import { Text } from '@chakra-ui/react'
import episodeContext from './episodeContext'

export default function EpisodeTime (): JSX.Element {
  const episode = episodeContext.use()
  const date = new Date(episode._creationTime)
  const time = date.toLocaleTimeString()
  return <Text whiteSpace='nowrap'>({time})</Text>
}
