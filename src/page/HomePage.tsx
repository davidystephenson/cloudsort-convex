import { JSX } from 'react'
import LayoutTitle from '../layout/LayoutPage'
import UserMenu from '../user/UserMenu'
import AuthListsTitle from '../list/AuthListsTitle'
import { HStack, Heading } from '@chakra-ui/react'
import renameAuthContext from '../auth/renameAuthContext'
import AuthListsMenu from '../list/AuthListsMenu'
import CreateListForm from '../list/CreateListForm'
import PublicLists from '../list/PublicLists'
import UserListsTable from '../list/UserListsTable'
import Header from '../header/Header'
import { MdPublic } from 'react-icons/md'
import { useArchedQuery } from '../arched/useArchedQuery'
import { api } from '../../convex/_generated/api'
import createListContext from '../list/createListContext'
import PublicListsTable from '../list/PublicListsTable'
import UserSection from '../user/UserSection'
import AuthController from '../auth/AuthController'

export default function HomePage (): JSX.Element {
  const home = useArchedQuery({ args: {}, query: api.home.default })
  if (home.loading) {
    return (
      <>
        <Header loading />
        <LayoutTitle loading />
      </>
    )
  }
  console.log('home.data', home.data)
  if (home.data.auth == null) {
    return (
      <>
        <Header />
        <LayoutTitle
          title={<HStack><span>Lists</span><MdPublic /></HStack>}
        />
        <PublicListsTable docs={home.data.lists} />
      </>
    )
  }
  return (
    <AuthController auth={home.data.auth}>
      <createListContext.Provider>
        <renameAuthContext.Provider>
          <Header />
          <LayoutTitle
            title={<AuthListsTitle name={home.data.auth.name} />}
            menu={<UserMenu />}
          />
          <HStack width='100%' height='32px'>
            <Heading size='md'>Lists</Heading>
            <AuthListsMenu />
            <CreateListForm />
          </HStack>
          <UserListsTable docs={home.data.privateUserLists} />
          <UserSection users={home.data.followers}>Followers</UserSection>
          <UserSection users={home.data.followeds}>Following</UserSection>
          <PublicLists docs={home.data.publicLists} />
        </renameAuthContext.Provider>
      </createListContext.Provider>
    </AuthController>
  )
}
