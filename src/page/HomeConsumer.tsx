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
import HeaderLoaded from '../header/HeaderLoaded'
import { MdPublic } from 'react-icons/md'
import createListContext from '../list/createListContext'
import PublicListsTable from '../list/PublicListsTable'
import UserSection from '../user/UserSection'
import AuthController from '../auth/AuthController'
import homeQueryContext from './homeQueryContext'
import HeaderLoading from '../header/HeaderLoading'

export default function HomePage (): JSX.Element {
  const homeQuery = homeQueryContext.query.use()
  if (homeQuery.isPending) {
    return (
      <>
        <HeaderLoading />
        <LayoutTitle loading />
      </>
    )
  }
  if (homeQuery.isError) {
    return <div>Error: {homeQuery.error?.message}</div>
  }
  if (homeQuery.data.auth == null) {
    return (
      <>
        <HeaderLoaded />
        <LayoutTitle
          title={<HStack><span>Lists</span><MdPublic /></HStack>}
        />
        <PublicListsTable docs={homeQuery.data.lists} />
      </>
    )
  }
  return (
    <AuthController auth={homeQuery.data.auth}>
      <createListContext.Provider>
        <renameAuthContext.Provider>
          <HeaderLoaded />
          <LayoutTitle
            title={<AuthListsTitle name={homeQuery.data.auth.name} />}
            menu={<UserMenu />}
          />
          <HStack width='100%' height='32px'>
            <Heading size='md'>Lists</Heading>
            <AuthListsMenu />
            <CreateListForm />
          </HStack>
          <UserListsTable docs={homeQuery.data.privateUserLists} />
          <UserSection users={homeQuery.data.followers}>Followers</UserSection>
          <UserSection users={homeQuery.data.followeds}>Following</UserSection>
          <PublicLists docs={homeQuery.data.publicLists} />
        </renameAuthContext.Provider>
      </createListContext.Provider>
    </AuthController>
  )
}
