import { api } from "../../convex/_generated/api";
import mutationContext from "../arched/mutationContext";

const unhideItemContext = mutationContext({
  name: 'Unhide Item',
  mutation: api.unhideItem.default
})
export default unhideItemContext