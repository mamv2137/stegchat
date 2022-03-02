import {
  Avatar,
  Flex,
  HStack,
  VStack,
  Text,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaEthereum } from "react-icons/fa";



import ChatList from '../ChatList';
import Conversation from '../Conversation';


const ChatContainer = () => {
  // const { selectedChat } = useChatStore();

  // useEffect(async () => {
  //   const signed = await web3.eth.personal.ecRecover(
  //     web3.utils.fromUtf8(`StegChat dApp`),
  //     "0x7ff6cdb5097e7c57e4314c37903126e45a8ae23e591510050bcc9e7c8566566b433f01eab30ae9eed9b13cca5c19a9458ed9a07ca05ae913a3c054718e743a601b"
  //   );
  //   console.log(signed)
  //   // if (account?.length) {
  //   //   handleSignMessage(account);
  //   // }
  // }, [account]);

  const wallet = '0xf859cb539ede394da3892c3b79794cb565682d45';

  return (
    <Flex w="full" alignItems="flex-start">
      <VStack bg="#FAFAFE" w="lg" h="full" px={4} alignItems="flex-start">
        <HStack my={5} spacing={5} w="100%">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <VStack alignItems="flex-start" w="100%">
            <Text fontSize="md" fontWeight="500">
              Elyon!
            </Text>
            <HStack rounded="full" bg="gray.200" p={2}>
              <FaEthereum />
              <Text fontSize="xs" color="gray.800">
                {wallet.slice(0, 6)}...{wallet.slice(39)}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Divider />
        <Text as="h2" fontSize="xl" fontWeight="600">
          Messages
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch color="gray.300" />
          </InputLeftElement>
          <Input
            variant="filled"
            placeholder="Search..."
            w="100%"
            bg="#ffffff"
          />
        </InputGroup>
        {/* Contact List */}
        <ChatList />
      </VStack>
      {/* Conversation */}
      <Conversation />
      {/* <VStack w="lg" h="full" bg="orange.200">
        <Text>Info chat</Text>
      </VStack> */}
    </Flex>
  );
};

export default ChatContainer;
