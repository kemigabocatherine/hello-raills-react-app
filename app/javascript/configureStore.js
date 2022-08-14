import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  greeting: 'Hi',
}

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_GREETING_SUCCESS":
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = configureStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}