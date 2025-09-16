import { JSX, ReactNode } from 'react'
import AuthController from '../auth/AuthController'
import listContext from './listContext'
import { Doc } from '../../convex/_generated/dataModel'
import { RelatedList } from './listTypes'
import userContext from '../user/userContext'
import HeaderLoaded from '../header/HeaderLoaded'
import ListHeader from './ListHeader'

export default function ListController (props: {
  auth?: Doc<'users'>
  children: ReactNode
  list: RelatedList
  user: Doc<'users'>
}): JSX.Element {
  return (
    <AuthController auth={props.auth}>
      <listContext.Provider list={props.list}>
        <userContext.Provider user={props.user}>
          <HeaderLoaded>
            <ListHeader />
          </HeaderLoaded>
          {props.children}
        </userContext.Provider>
      </listContext.Provider>
    </AuthController>
  )
}
