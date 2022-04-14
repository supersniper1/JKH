import {createStore} from "redux";

const defaultState = {
  reduxStorage: null,
}

const JWTChanger = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_KEY':
      return {...state, reduxStorage: action.token}
    case 'REMOVE_KEY':
      return {...state, reduxStorage: action.token}
    default:
      return state
  }
}

export const store = createStore(JWTChanger)