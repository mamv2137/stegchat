import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { sendFakeMessage } from './actions'
import { chatReducer, INIT_STATE } from './reducer'

const ChatContext = createContext({});

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, INIT_STATE)

  useEffect(() => {
    sendFakeMessage('Fake Message...')
  }, [])
  
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
