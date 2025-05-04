import { ReactNode } from 'react'
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system'
}
const theme = extendTheme({ config })

export default function App (): ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <h1>Hello World</h1>
    </ChakraProvider>
  )
}
