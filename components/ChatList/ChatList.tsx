import {
  VStack,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useChatStore } from "store";

import ChatListItem from "./ChatListItem";

const ChatList = () => {
  const { chats, selectedChat } = useChatStore();

  const isSelected = useCallback((id) => selectedChat?.id === id, [selectedChat]);

  return (
    <VStack w="100%" overflowY="scroll" py={2}>
      {chats.map((item) => (
        <ChatListItem isSelected={isSelected} key={item.id} {...item} />
      ))}
    </VStack>
  );
};

export default ChatList;
