import { JSX } from 'react'
import hideItemContext from '../hide/hideItemContext'
import ItemMenuConsumer from './ItemMenuConsumer'
import unhideItemContext from '../hide/unhideItemContext'

export default function ItemMenu (): JSX.Element {
  return (
    <hideItemContext.Provider>
      <unhideItemContext.Provider>
        <ItemMenuConsumer />
      </unhideItemContext.Provider>
    </hideItemContext.Provider>
  )
}
