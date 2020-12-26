import React, { useEffect, useRef } from 'react'

import chatSelector from '../../../contexts/Chat/selector'

import OwnMessage from '../Messages/OwnMessage'
import OtherMessage from '../Messages/OtherMessage'

import { ContentContainer } from './Content.styles.tw'

import noContent from './noContent.svg'
import { useContextUser } from '../../../contexts/User'

const ChatContent = () => {
    const { getMessagesFromSelectedChat: messages } = chatSelector()
    const [{ user }] = useContextUser() //TODO: Create Selector for User Context
    console.log('messages', messages, user)
    const messagesRef = useRef(null)
    useEffect(() => {
        scrollToBottom()
    }, [messages])
    
    const scrollToBottom = () => messagesRef.current.scrollTop = messagesRef.current.scrollHeight 

    const renderMessages = () => {
        //TODO: put here the skeleton loader
        return messages.map(message => {
            if (message.sender === user.userId) {
                return (
                    <OwnMessage key={message.id} message={message} />
                )
            } else {
                return (
                    <OtherMessage key={message.id} message={message} />
                )
            }
        })
    }

    const hasMessages = messages.length > 0 ? true : false

    const renderNoContentImg = () => (
        <div className="flex flex-col flex-1 justify-center items-center h-64 w-64">
            <img className="py-2" src={noContent} alt="No content found" />
            <span className="font-bold text-gray-600">Select a Chat</span>
        </div>
    )
    return (
        <ContentContainer ref={messagesRef} id="chat-scroll">
            { hasMessages ? renderMessages() : renderNoContentImg()}
        </ContentContainer>
    )
}

export default ChatContent
