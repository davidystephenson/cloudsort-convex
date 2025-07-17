import contextCreator from 'context-creator'
import { Episode } from './episodeTypes'

const episodeContext = contextCreator({
  name: 'Episode',
  useValue: (props: {
    episode: Episode
  }) => {
    return props.episode
  }
})

export default episodeContext
