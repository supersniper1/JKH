import {createStore} from "redux";

const defaultState = {
  id: 0,
}

const gottenId = (state = defaultState, action) => {
  switch (action.type) {
    case "GOTTEN_ID":
      return {...state, id: action.id}
    default:
      return state
  }
}

export const store = createStore(gottenId)