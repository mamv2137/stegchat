import moment from 'moment';
import { v4 as uuid } from 'uuid';

import {
  SEND_MESSAGE,
  SEND_FAKE_MESSAGE,
  SHOW_HIDDEN_MESSAGE,
  SET_CHATS,
  SELECT_CHAT,
} from './types';

const ExampleMessage = {
  id: uuid(),
  text: 'Un mensaje bien chido de la otra persona',
  hiddenText: 'Mensaje oculto...',
  userId: 'other',
  time: moment(),
};

const INIT_STATE = {
  chats: [],
  messages: [],
  showHiddenMessages: false,
  loadingMessages: false,
  loadingHiddenMessages: false,
};

function chatReducer(state, { type, payload }) {
  switch (type) {
    case SET_CHATS: {
      return {
        ...state,
        chats: payload.chats,
      };
    }
    case SELECT_CHAT: {
      return {
        ...state,
        chats: state.chats.map((chat) => {
          const isSelectedChat = chat.id === payload.chatId;
          return Object.assign({}, chat, {
            isSelected: isSelectedChat ? true : false,
          });
        }),
      };
    }
    case SEND_MESSAGE: {
      // const message = Object.assign({}, payload, {
      //   messageId: uuid(),
      //   date: moment(),
      // })
      const message = {
        ...payload,
        messageId: uuid(),
        date: moment(),
      };
      return {
        ...state,
        chats: state.chats.map((chat) => {
          const isSelectedChat = chat.isSelected;
          if (isSelectedChat) {
            chat.messages = [...chat.messages, message];
            return chat;
          } else {
            return chat;
          }
        }),
      };
    }
    case SEND_FAKE_MESSAGE: {
      const message = Object.assign({}, ExampleMessage, {
        id: uuid(),
        text: payload.text,
        time: moment(),
        hiddenText: `${payload.text} oculto...`,
      });
      return {
        ...state,
        messages: [...state.messages, message],
      };
    }
    case SHOW_HIDDEN_MESSAGE: {
      return {
        ...state,
        showHiddenMessages: !state.showHiddenMessages,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

export { INIT_STATE, chatReducer };
