import React, { JSX } from 'react'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { Link as ReactLink, LinkProps as ReactLinkProps } from 'react-router-dom'

export type ClinkProps = ChakraLinkProps & ReactLinkProps & {
  View?: React.ComponentType<ChakraLinkProps>
}

export function Uilink (props: ClinkProps): JSX.Element {
  const View = props.View ?? ChakraLink
  return (
    <View as={ReactLink} {...props} />
  )
}
