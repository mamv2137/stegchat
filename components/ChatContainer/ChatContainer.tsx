import { useGun } from '@/contexts/gun';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Input,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import { useWallet } from 'use-wallet';
import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56],
});

const ChatContainer = () => {
  const { activate, active, deactivate, account } = useWeb3React();
  const web3 = new Web3(Web3.givenProvider);
  const wallet = useWallet();
  const [hasSignature, setHasSignature] = useState(false);

  const { register, handleSubmit } = useForm();
  const [chats, setChats] = useState([]);
  const { gun } = useGun();

  const handleLogout = async () => {
    try {
      await deactivate();
      setHasSignature(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateError = (err: string) => {
    if (err === 'User already created!') {
      // gunAuthentication(user?.get('ethAddress'), user?.get('username'));
    }

    if (err === 'User is already being created or authenticated!') {
      handleLogout();
    }
  };

  const generateDataToCurrentUser = () => {
    gun
      .get('profile')
      .put('user?.get(ethAddress)')
      .put({
        name: 'Palabra de 3 letras de la persona',
        contacts: {},
        chats: {},
        phone: '',
        avatar: `https://avatars.dicebear.com/api/croodles/${user?.get(
          'ethAddress'
        )}.svg`,
      });
  };

  const handleSignMessage = async (acc) => {
    await web3.eth.personal.sign(
      web3.utils.fromUtf8(`I am signing my one-time nonce: nonce`),
      acc,
      (err, signature) => {
        if (err) {
          handleLogout();
        }
        setHasSignature(true);
      }
    );
  };

  useEffect(() => {
    if (account?.length) {
      handleSignMessage(account);
    }
  }, [account]);

  const handleAuth = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  };

  const getContacts = () => {
    // const contacts = gunUser.get('alias').get('contacts');
    // contacts.once((data) => {
    //   console.log('first contact', data);
    // });
  };

  const getChats = () => {
    // const chats = gunUser.get('alias').get('chats');
    // chats.once((data) => {
    //   if (!Boolean(data)) {
    //     console.log('no chats');
    //     setChats([]);
    //     return;
    //   }
    //   console.log('first chats', data);
    // });
  };

  const onSubmit = (data) => {
    // const find = gun.user(data.pub);
    // find
    //   .get('alias')
    //   .get('contacts')
    //   .once((data) => {
    //     console.log('find', data);
    //   });
  };

  const isAuthenticated = hasSignature && wallet.status === 'connected';

  return (
    <Flex bg="blue.200" w="full" alignItems="flex-start" pt={2}>
      <HStack mt={5}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <VStack alignItems="flex-start">
          <Text fontSize="md">Nombre</Text>
          <Text fontSize="xs">
            Address | {isAuthenticated && wallet.account}
          </Text>
        </VStack>
        {isAuthenticated ? (
          <VStack>
            <Button onClick={handleLogout}>Logout</Button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input {...register('pub')} />
              <Button type="submit">Submit</Button>
            </form>
            <HStack>
              <VStack>
                <Text fontSize="md">Contactos</Text>
              </VStack>
              <VStack>
                <Text fontSize="md">Chat</Text>
              </VStack>
            </HStack>
          </VStack>
        ) : (
          <>
            <Button onClick={handleAuth}>Login</Button>
          </>
        )}
        <Button onClick={handleLogout}>Just in Case 🔴</Button>
      </HStack>

      {/* <Box>Chat</Box>
      <Box>Info chat</Box> */}
    </Flex>
  );
};

export default ChatContainer;
