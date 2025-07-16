import { JSX } from 'react'
import { getListContext } from './getListContext'
import ListAuthorizer from './ListAuthorizer'
import ListConsumer from './ListConsumer'
import listContext from './listContext'
import ListNotFound from './ListNotFound'

export default function GetListConsumer (): JSX.Element {
  const getList = getListContext.query.useMaybe()
  if (!getList.provided || getList.value.loading) {
    return <ListConsumer />
  }
  if (getList.value.data == null) {
    return <ListNotFound />
  }
  return (
    <listContext.Provider list={getList.value.data}>
      <ListAuthorizer />
    </listContext.Provider>
  )
}
