import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { ConvexReactClient } from 'convex/react'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { ReactNode } from 'react'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL)

const config: ThemeConfig = {
  initialColorMode: 'system'
}
const theme = extendTheme({ config })

export default function App (): ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <ConvexAuthProvider client={convex}>
        <h1>Hello World</h1>
      </ConvexAuthProvider>
    </ChakraProvider>
  )
}
