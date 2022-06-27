import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { ChakraProvider } from '@chakra-ui/react'

import 'mapbox-gl/dist/mapbox-gl.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {

  return ( 
  <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
          <Component {...pageProps} />
      </ChakraProvider> 
    </QueryClientProvider>
  </SessionProvider>
  )
}

export default MyApp
