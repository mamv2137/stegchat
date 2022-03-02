import React from "react";
import { Avatar, AvatarBadge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useChatStore } from "store";
import TimeAgo from "timeago-react";

type IChatItem = {
  id: string;
  name: string;
  state: string;
  updatedAt: number;
  isSelected(id: string): boolean;
};

const ChatListItem: React.FC<IChatItem> = ({ isSelected, ...item }) => {
  const { chats, selectedChat, setSelectedChat } = useChatStore();

  return (
    <HStack
      onClick={() => setSelectedChat(item)}
      key={item.id}
      cursor="pointer"
      bg={isSelected(item.id) ? "white" : ""}
      w="100%"
      p={2}
      boxShadow={isSelected(item.id) ? "base" : ""}
      rounded="md"
    >
      <Avatar size="sm" name={item.name}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Flex flex="1" flexDir="column">
        <Text fontSize="sm" fontWeight="500">
          {item.name}
        </Text>
        <Text fontSize="xs" color="gray.400">
          {item.state}
        </Text>
      </Flex>
      <Box>
        {/* <Badge borderRadius="full" colorScheme="blue">
                  2
                </Badge> */}
        <Text fontSize="10px" color="gray.400">
          <TimeAgo datetime={item.updatedAt} />
        </Text>
      </Box>
    </HStack>
  );
};

export default ChatListItem;
