import { JSX } from 'react'
import HomeConsumer from './HomeConsumer'
import homeQueryContext from './homeQueryContext'

export default function HomePage (): JSX.Element {
  return (
    <homeQueryContext.Provider args={{}}>
      <HomeConsumer />
    </homeQueryContext.Provider>
  )
}
