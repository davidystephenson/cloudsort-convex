import { api } from '../../convex/_generated/api'
import mutationContext from '../arched/mutationContext'

const rewindListContext = mutationContext({
  mutation: api.rewindList.default,
  name: 'Rewind List'
})
export default rewindListContext
