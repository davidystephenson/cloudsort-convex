import { api } from '../../convex/_generated/api'
import mutationContext from '../arched/mutationContext'

const hideItemContext = mutationContext({
  mutation: api.hideItem.default,
  name: 'Hide Item'
})
export default hideItemContext
