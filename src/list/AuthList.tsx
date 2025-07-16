import { JSX } from 'react'
import Choice from '../choice/Choice'
import AuthListTable from './AuthListTable'
import ListHeader from './ListHeader'
import authListContext from './authListContext'

export default function AuthList (): JSX.Element {
  return (
    <authListContext.Provider>
      <ListHeader />
      <Choice />
      <AuthListTable />
    </authListContext.Provider>
  )
}
