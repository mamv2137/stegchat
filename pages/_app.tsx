import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MoralisProvider
        initializeOnMount
        appId="Yim1erWtKl7SbSYCgM8JvfZc6e0dDjmuU5rkYcFv"
        serverUrl="https://nupuvx2w9fza.usemoralis.com:2053/server">
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
