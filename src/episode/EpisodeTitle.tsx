import { Heading, HStack, Link, Td } from '@chakra-ui/react'
import { JSX, MouseEvent, ReactNode } from 'react'
import EpisodeTime from './EpisodeTime'
import episodeContext from './episodeContext'
import authListContext from '../list/authListContext'
import EpisodeMenu from './EpisodeMenu'
import rewindListContext from '../list/rewindlistContext'

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
    <>
      <Td>
        <HStack py='1px'>
          <Link href='#' onClick={handleClick} width='100%'>
            <HStack width='100%'>
              <Heading size='xs' width='100%' alignItems='center'>
                <HStack fontWeight='bold' width='100%' justifyContent='start'>
                  {props.children}
                </HStack>
              </Heading>
              <EpisodeTime />
            </HStack>
          </Link>
        </HStack>
      </Td>
      <Td textAlign='right'>
        <rewindListContext.Provider>
          <EpisodeMenu />
        </rewindListContext.Provider>
      </Td>
    </>
  )
}
