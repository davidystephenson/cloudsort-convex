import { forwardRef } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

const ThemeIconButtonView = forwardRef<HTMLButtonElement, IconButtonProps>((
  props,
  ref
) => {
  return (
    <IconButton
      colorScheme='red'
      size='sm'
      variant='link'
      {...props}
      ref={ref}
    />
  )
})
export default ThemeIconButtonView
