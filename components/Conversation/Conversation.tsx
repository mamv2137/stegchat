import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineInfoCircle,
  AiOutlineSearch,
  AiOutlineSend,
} from "react-icons/ai";
import { useChatStore } from "store";
import TimeAgo from "timeago-react";
import { useWallet } from "use-wallet";

type Props = {};

const Conversation = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { selectedChat } = useChatStore();
  // const { account } = useWallet();
  const account = "0xf859CB539EDe394DA3892C3B79794cb565682d45";

  const hasMessages = selectedChat?.messages?.length > 0 || false;

  const isOwnMessage = (id) =>
    id === account; //account;

  const onSubmit = ({ message }) => {
    console.log(message)
  }

  const renderMessages = () =>
    selectedChat.messages.map((chat) =>
      isOwnMessage(chat.sender) ? (
        <Flex flexDir="column" my={1}>
          <Box
            bg="blue.400"
            color="white"
            p={2}
            w="fit-content"
            alignSelf="flex-end"
            rounded="full"
            borderTopRightRadius="initial"
          >
            <Text fontSize="sm">{chat.text}</Text>
          </Box>
          <Text alignSelf="flex-end" fontSize="10px" color="gray.500">
            <TimeAgo datetime={chat.createdAt} />
          </Text>
        </Flex>
      ) : (
        <Flex flexDir="column" w="fit-content" my={1}>
          <Box
            bg="gray.100"
            p={2}
            w="fit-content"
            rounded="full"
            borderTopLeftRadius="initial"
          >
            <Text fontSize="sm">{chat.text}</Text>
          </Box>
          <Text alignSelf="flex-end" fontSize="10px" color="gray.500">
            <TimeAgo datetime={chat.createdAt} />
          </Text>
        </Flex>
      )
    );

  return (
    <VStack h="full" w="full">
      <HStack py={2} px={4} w="100%" justifyContent="space-between">
        <HStack>
          <Avatar name={selectedChat?.name} size="sm" />
          <Text fontSize="md" fontWeight="500">
            {selectedChat?.name}
          </Text>
        </HStack>
        <HStack>
          <AiOutlineSearch cursor="pointer" fontSize="20px" />
          <Divider orientation="vertical" />
          <AiOutlineInfoCircle cursor="pointer" fontSize="20px" />
        </HStack>
      </HStack>
      <Divider />
      <Flex px={4} flex={1} flexDir="column" w="100%" overflowY="scroll">
        {/* <Badge alignSelf="center" colorScheme="">
          Today
        </Badge> */}
        {/* Message */}

        {hasMessages ? renderMessages() : <Text>No hay es na</Text>}
      </Flex>
      <Box p={4} w="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <FormControl w="100%">
              <Input
                {...register("message")}
                boxShadow="base"
                placeholder="Your message..."
                w="100%"
              />
            </FormControl>
            <InputRightElement color="gray.500" pointerEvents="none" mr={8}>
              <AiOutlineSearch fontSize="20px" />
            </InputRightElement>
            <InputRightElement color="blue.500">
              <Button
                size="xs"
                variant="ghost"
                h="1.75rem"
                type="submit"
              >
                <AiOutlineSend fontSize="20px" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
    </VStack>
  );
};

export default Conversation;
