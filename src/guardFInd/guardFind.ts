export default function guardFind <Element> (props: {
  array: Element[]
  find: (element: Element) => boolean
  label: string
}): Element {
  const found = props.array.find(props.find)
  if (found == null) {
    throw new Error(`${props.label} not found`)
  }
  return found
}
