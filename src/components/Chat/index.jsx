import React, {useContext} from 'react'
import ChatHeader from "./Header";
import ChatContent from "./Content";
import ChatTextBar from "./ChatTextBar";

import { useContextChat } from '../../contexts/Chat'

import { ChatContainer } from './Chat.styles.tw.js'
import { sendFakeMessage, sendMessage, toggleShowHiddenMessage } from '../../contexts/Chat/actions';

const Chat = () => {
    const [chats, chatDispatch] = useContextChat()
    const onSend = text => {
        chatDispatch(sendMessage(text))
        chatDispatch(sendFakeMessage(text))
    }
    const onShowMessages = () => {
        chatDispatch(toggleShowHiddenMessage())
    }
    return (
        <ChatContainer>
            <ChatHeader />
            <ChatContent messages={chats.messages} />
            <ChatTextBar onSend={onSend} onShowMessages={onShowMessages} />
        </ChatContainer>
    )
}

export default Chat
