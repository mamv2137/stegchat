import {
  SEND_MESSAGE,
  SEND_FAKE_MESSAGE,
  SHOW_HIDDEN_MESSAGE,
  SET_CHATS,
  SELECT_CHAT
} from './types'

export const setChats = chats => ({
  type: SET_CHATS,
  payload: {
    chats
  }
})

export const selectChat = id => ({
  type: SELECT_CHAT,
  payload: {
    chatId: id
  }
})

export const sendMessage = ({sender, text}) => ({
  type: SEND_MESSAGE,
  payload: {
    sender,
    text
  }
})

export const sendFakeMessage = text => ({
  type: SEND_FAKE_MESSAGE,
  payload: {
    text
  }
})

export const toggleShowHiddenMessage = () => ({
  type: SHOW_HIDDEN_MESSAGE
})