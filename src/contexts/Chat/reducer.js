import moment from 'moment';
import { v4 as uuid } from 'uuid'

import {
  SEND_MESSAGE,
  SEND_FAKE_MESSAGE,
  SHOW_HIDDEN_MESSAGE
} from './types'

const ExampleMessage = {
    id: uuid(),
    text: 'Un mensaje bien chido de la otra persona',
    hiddenText: 'Mensaje oculto...',
    userId: 'other',
    time: moment(),
}

const INIT_STATE = {
  messages: [],
  showHiddenMessages: false,
  loadingMessages: false,
  loadingHiddenMessages: false,
}

function chatReducer(state, { type, payload }) {
  switch (type) {
    case SEND_MESSAGE: {
      const message = Object.assign({}, ExampleMessage, {
          text: payload.text,
          userId: 'own',
          time: moment(),
          hiddenText: `${payload.text} oculto...`
      })
      return {
        ...state,
        messages: [...state.messages, message]
      }
    }
    case SEND_FAKE_MESSAGE: {
      const message = Object.assign({}, ExampleMessage, {
          id: uuid(),
          text: payload.text,
          time: moment(),
          hiddenText: `${payload.text} oculto...`
      })
      return {
        ...state,
        messages: [...state.messages, message]
      }
    }
    case SHOW_HIDDEN_MESSAGE: {
      return {
        ...state,
        showHiddenMessages: !state.showHiddenMessages
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export {
  INIT_STATE,
  chatReducer
}