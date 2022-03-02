import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { ColorModeScript } from "@chakra-ui/react";
import { UseWalletProvider } from 'use-wallet';
import { ChakraProvider } from '@chakra-ui/react';
import Web3 from 'web3';

import { GunProvider } from '@/contexts/gun';

import theme from '../theme'

function getLibrary(provider: any) {
  const web3 = new Web3(provider);
  return web3;
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <UseWalletProvider autoConnect>
          <ChakraProvider theme={theme}>
            <GunProvider>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <Component {...pageProps} />
            </GunProvider>
          </ChakraProvider>
        </UseWalletProvider>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
