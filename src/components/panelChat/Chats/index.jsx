import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Title from '../../common/Title'
import Input from '../../common/Inputs/Input'
import List from '../../List'

import { useContextChat } from '../../../contexts/Chat'

const items = Array.from(
  {
    length: 10,
  },
  () => ({
    id: uuidv4(),
    name: `${Math.random().toString(36).substring(7)} 🥩...`,
    time: '5m ago',
    isSelected: false,
  })
);

function Chats() {
  const [chatItems, setChatItems] = useState([])
  const [{ chats }] = useContextChat()

  const buildChatsItems = () => {
    if (chats.length === 0) return chats
    return chats.map(chat => {
      return Object.assign({}, chat.contact, {
        chatId: chat.id,
        isSelected: chat.isSelected
      })
    })
  }
  
  useEffect(() => {
    const recentChats = buildChatsItems()
    setChatItems(recentChats)
  }, [chats])

  return (
    <>
      <Title text="Chats" />
      {/**Input */}
      <div className="my-1 flex justify-center">
        <Input
          name="chats"
          type="text"
          placeholder="Search by name..."
        />
      </div>
      {/** Recent Chats */}
      <List items={chatItems} />
    </>
    )
}

export default Chats
