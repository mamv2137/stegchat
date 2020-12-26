import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { setChats } from './actions'
import { chatReducer, INIT_STATE } from './reducer'

import { useContextUser } from '../User'

import chats from '../../mockData/chats'
import users from '../../mockData/users'


// import sc from 'stegcloak'
// const stegcloak = new sc(true, false)
// const magic = stegcloak.hide("Mensaje oculto", "pruebatexto", "Mensaje normal");
// console.log(magic)
// const secret = stegcloak.reveal(magic, "pruebatexto");
// console.log(secret);

const ChatContext = createContext({});

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, INIT_STATE)
  const [userState] = useContextUser()

  const getChatsByUser = () => {
    const { user } = userState
    if (!user) return []
    const chatsIds = user.chats
    const chatList = chatsIds.map(id => {
      const chat = chats.find(chat => chat.id === id)
      return Object.assign({}, chat, {
        isSelected: false
      })
    }).map(chat => {
      const contact = users.find(user => user.userId === chat.contact)
      return Object.assign({}, chat, {
        contact
      })
    })

    return chatList
  }
 
  useEffect(() => {
    const userChats = getChatsByUser();
    dispatch(setChats(userChats))
  }, [userState])
  
  return (
    <ChatContext.Provider
      value={{
        chatState: state,
        chatDispatch: dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useContextChat = () => {
  const { chatState, chatDispatch } = useContext(ChatContext)

  return [ chatState, chatDispatch ]
}

export { ChatContext, ChatProvider, useContextChat };
