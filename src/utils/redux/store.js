import {createStore} from "redux";

const defaultState = {
  reduxStorage: null,
}

const JWTChanger = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_KEY':
      return {...state, reduxStorage: 'den'}
    case 'REMOVE_KEY':
      return {...state, reduxStorage: null}
    default:
      return state
  }
}

export const store = createStore(JWTChanger)