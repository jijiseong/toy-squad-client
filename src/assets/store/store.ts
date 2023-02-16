import { legacy_createStore as createStore } from "redux";

const reducer = (currentState: any, action: any) => {
  if (currentState === undefined) {
    return {
      onAccount: false,
    };
  }
  const newState = { ...currentState };
  if (action.type === "OFF") {
    newState.onAccount = false;
  }
  if (action.type === "ON") {
    newState.onAccount = true;
  }
  return newState;
};

export const store = createStore(reducer);
