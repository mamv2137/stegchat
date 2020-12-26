import {
  SET_USER,
} from './types'

const INIT_STATE = {
  user: null,
  isLogged: true,
  //rest of params for user...
}

function userReducer(state, { type, payload }) {
  switch (type) {
    case SET_USER: {
      return {
        ...state,
        user: {
          ...payload.user
        }
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export {
  INIT_STATE,
  userReducer
}