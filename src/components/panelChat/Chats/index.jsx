import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Title from '../../common/Title'
import Input from '../../common/Inputs/Input'
import List from '../../List'

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
      {/**Contacts */}
      <List items={items} />
    </>
    )
}

export default Chats
