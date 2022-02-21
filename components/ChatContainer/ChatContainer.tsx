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
import { useMoralis } from 'react-moralis';

const ChatContainer = () => {
  const { register, handleSubmit } = useForm();
  const [chats, setChats] = useState([]);
  const { gun, gunUser, gunAuthHandler, isGunUserAuthenticated } = useGun();
  const { authenticate, authError, isAuthenticated, logout, user } =
    useMoralis();

  const gunAuthentication = (username: string, password: string) => {
    if (!Boolean(username) || !Boolean(password)) return;
    gunUser.auth(username, password, (userAuth) => {
      if (userAuth.hasOwnProperty('err')) {
        gunAuthHandler(false);
        logout();
      }
      gunAuthHandler(true);
    });
  };

  const handleLogout = () => {
    logout();
    gunUser.leave();
    gunAuthHandler(false);
  };

  const handleCreateError = (err: string) => {
    if (err === 'User already created!') {
      gunAuthentication(user?.get('ethAddress'), user?.get('username'));
    }

    if (err === 'User is already being created or authenticated!') {
      handleLogout();
    }
  };

  const generateDataToCurrentUser = () => {
    console.log('generate');
    gunUser.put({
      name: 'Palabra de 3 letras de la persona',
      contacts: {},
      chats: {},
      phone: '',
      avatar: `https://avatars.dicebear.com/api/croodles/${user?.get(
        'ethAddress'
      )}.svg`,
    });
  };

  const handleAuth = () => {
    authenticate({
      signingMessage: 'StegChat dApp Authentication',
      onSuccess: (data) => {
        const ethAddress = data.get('ethAddress');
        const username = data.get('username');

        gunUser.create(ethAddress, username, (userCreateRes) => {
          if (userCreateRes.hasOwnProperty('err')) {
            handleCreateError(userCreateRes?.err);
          }

          generateDataToCurrentUser();
          gunAuthentication(ethAddress, username);
        });
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const getContacts = () => {
    const contacts = gunUser.get('alias').get('contacts');
    contacts.once((data) => {
      console.log('first contact', data);
    });
  };

  const getChats = () => {
    const chats = gunUser.get('alias').get('chats');
    chats.once((data) => {
      if (!Boolean(data)) {
        console.log('no chats');
        setChats([]);
        return;
      }
      console.log('first chats', data);
    });
  };

  const onSubmit = (data) => {
    const find = gun.user(data.pub);

    find
      .get('alias')
      .get('contacts')
      .once((data) => {
        console.log('find', data);
      });
  };

  useEffect(() => {
    gun.on('auth', (data = {}) => {
      if (Object.keys(data).length > 0) {
        gunAuthHandler(true);
      }
    });
  }, [gun, gunAuthHandler]);

  useEffect(() => {
    if (isAuthenticated && isGunUserAuthenticated) {
      getContacts();
      getChats();
    }
  }, [isAuthenticated, isGunUserAuthenticated]);

  return (
    <Flex bg="blue.200" w="full" alignItems="flex-start" pt={2}>
      <HStack mt={5}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <VStack alignItems="flex-start">
          <Text fontSize="md">Nombre</Text>
          <Text fontSize="xs">
            Address | {isAuthenticated && user?.get('ethAddress')}{' '}
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
