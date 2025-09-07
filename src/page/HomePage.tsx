import { JSX } from 'react'
import HomeConsumer from './HomeConsumer'
import homeQueryContext from './homeQueryContext'

export default function HomePage (): JSX.Element {
  return (
    <homeQueryContext.Provider>
      <HomeConsumer />
    </homeQueryContext.Provider>
  )
}
