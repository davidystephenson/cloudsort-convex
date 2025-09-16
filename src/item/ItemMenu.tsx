import { JSX } from 'react'
import hideItemContext from '../hide/hideItemContext'
import ItemMenuConsumer from './ItemMenuConsumer'

export default function ItemMenu (): JSX.Element {
  return (
    <hideItemContext.Provider>
      <ItemMenuConsumer />
    </hideItemContext.Provider>
  )
}
