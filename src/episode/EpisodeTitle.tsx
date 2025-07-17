import { Heading, HStack, Link } from '@chakra-ui/react'
import { JSX, MouseEvent, ReactNode } from 'react'
import EpisodeTime from './EpisodeTime'
import episodeContext from './episodeContext'
import authListContext from '../list/authListContext'

export default function EpisodeTitle (props: {
  children: ReactNode
}): JSX.Element {
  const authList = authListContext.use()
  const episode = episodeContext.use()
  function handleClick (event: MouseEvent): void {
    event.preventDefault()
    authList.toggleEpisode({ episodeId: episode._id })
  }
  return (
    <HStack py='1px'>
      <Link href='#' onClick={handleClick} width='100%'>
        <HStack width='100%'>
          <Heading size='xs' width='100%' alignItems='center'>
            <HStack fontWeight='bold' width='100%'>
              {props.children}
            </HStack>
          </Heading>
          <EpisodeTime />
        </HStack>
      </Link>
    </HStack>
  )
}
