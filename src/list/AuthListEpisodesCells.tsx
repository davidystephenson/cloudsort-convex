import { JSX } from 'react'
import { FullCellRobe } from 'robes'
import { AuthListEpisodes } from './listTypes'
import authorizeListContext from '../auth/authorizeListContext'
import { Heading, Link } from '@chakra-ui/react'
import authListContext from './authListContext'

export default function AuthListEpisodesCells (props: AuthListEpisodes): JSX.Element {
  void props
  const authList = authListContext.use()
  const list = authorizeListContext.data.use()
  const length = list.choices.length + list.imports.length
  function handleClick (): void {
    authList.toggleEpisodes()
  }
  return (
    <FullCellRobe>
      <Link href='#'>
        <Heading size='sm' onClick={handleClick}>
          History ({length})
        </Heading>
      </Link>
    </FullCellRobe>
  )
}
