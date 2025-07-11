import { contextCreator } from 'context-creator'

const optionContext = contextCreator({
  name: 'Option',
  useValue: (props: {
    hotkey: string
    uid: string
  }) => {
    return props
  }
})
export default optionContext
