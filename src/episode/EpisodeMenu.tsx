import { JSX } from 'react'
import { MenuRobe } from 'robes'
import { MenuItem } from '@chakra-ui/react'
import { IoIosRewind } from 'react-icons/io'
import episodeContext from './episodeContext'
import rewindListContext from '../list/rewindlistContext'
import listContext from '../list/listContext'

export default function EpisodeMenu (): JSX.Element {
  const episode = episodeContext.use()
  const list = listContext.use()
  const rewindList = rewindListContext.use()
  function handleClick (): void {
    console.log('handleClick episode', episode)
    void rewindList.act({ episodeId: episode._id, listId: list._id })
  }
  return (
    <MenuRobe>
      <MenuItem icon={<IoIosRewind />} onClick={handleClick}>
        Rewind
      </MenuItem>
    </MenuRobe>
  )
}
