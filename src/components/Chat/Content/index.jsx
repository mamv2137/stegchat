import React, { useEffect, useRef } from 'react'

import { useContextChat } from '../../../contexts/Chat'

import OwnMessage from '../Messages/OwnMessage'
import OtherMessage from '../Messages/OtherMessage'

import { ContentContainer } from './Content.styles.tw'

const ChatContent = ({
    messages = [],
}) => {
    const [chats, _] = useContextChat()
    const messagesRef = useRef(null)
    useEffect(() => {
        scrollToBottom()
    }, [messages])
    
    const scrollToBottom = () => messagesRef.current.scrollTop = messagesRef.current.scrollHeight 

    const renderMessages = () => {
        return messages.map(message => {
            if (message.userId === 'own') {
                return (
                    <OwnMessage key={message.id} message={message} showHiddenMessage={chats.showHiddenMessages} />
                )
            } else {
                return (
                    <OtherMessage key={message.id} message={message} showHiddenMessage={chats.showHiddenMessages} />
                )
            }
        })
    }
    return (
        <ContentContainer ref={messagesRef} id="chat-scroll">
            {renderMessages()}
        </ContentContainer>
    )
}

export default ChatContent
