import {
  SEND_MESSAGE,
  SEND_FAKE_MESSAGE,
  SHOW_HIDDEN_MESSAGE
} from './types'

export const sendMessage = text => ({
  type: SEND_MESSAGE,
  payload: {
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