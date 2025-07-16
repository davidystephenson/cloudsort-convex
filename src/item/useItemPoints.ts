import listContext from '../list/listContext'

export default function useItemPoints (props: {
  rank: number
}): number {
  const list = listContext.use()
  const ranks = list.listItems.map((item) => item.rank)
  const maximum = Math.max(...ranks)
  return maximum - props.rank
}
