import React from 'react';
import ChatHeader from './Header';
import ChatContent from './Content';
import ChatTextBar from './ChatTextBar';

import { useContextUser } from '../../contexts/User';
import { useContextChat } from '../../contexts/Chat';
import {
  sendMessage,
  toggleShowHiddenMessage,
} from '../../contexts/Chat/actions';

import { ChatContainer } from './Chat.styles.tw.js';

const Chat = () => {
  const [chats, chatDispatch] = useContextChat();
  const [{ user }] = useContextUser();
  const onSend = (text) => {
    const payloadMessage = {
      sender: user.userId,
      text,
    };
    chatDispatch(sendMessage(payloadMessage));
  };
  const onShowMessages = () => {
    chatDispatch(toggleShowHiddenMessage());
  };
  return (
    <ChatContainer>
      <ChatHeader />
      <ChatContent messages={chats.messages} />
      <ChatTextBar onSend={onSend} onShowMessages={onShowMessages} />
    </ChatContainer>
  );
};

export default Chat;
